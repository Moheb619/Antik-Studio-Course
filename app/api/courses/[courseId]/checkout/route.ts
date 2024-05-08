import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";
import { useState } from "react";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser();

    if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        isPublished: true,
      },
    });

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: params.courseId,
        },
      },
    });

    if (purchase) {
      return new NextResponse("Already purchased", { status: 400 });
    }

    if (!course) {
      return new NextResponse("Course Not found", { status: 404 });
    }

    const category = await db.category.findUnique({
      where: {
        id: course.categoryId!,
      },
    });

    // const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    //   {
    //     quantity: 1,
    //     price_data: {
    //       currency: "USD",
    //       product_data: {
    //         name: course.title,
    //         description: course.description!,
    //       },
    //       unit_amount: Math.round(course.price! * 100),
    //     },
    //   },
    // ];

    // let stripeCustomer = await db.stripeCustomer.findUnique({
    //   where: {
    //     userId: user.id,
    //   },
    //   select: {
    //     stripeCustomerId: true,
    //   },
    // });

    // if (!stripeCustomer) {
    //   const customer = await stripe.customers.create({
    //     email: user.emailAddresses[0].emailAddress,
    //   });

    //   stripeCustomer = await db.stripeCustomer.create({
    //     data: {
    //       userId: user.id,
    //       stripeCustomerId: customer.id,
    //     },
    //   });
    // }

    // const session = await stripe.checkout.sessions.create({
    //   customer: stripeCustomer.stripeCustomerId,
    //   line_items,
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?success=1`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?canceled=1`,
    //   metadata: {
    //     courseId: course.id,
    //     userId: user.id,
    //   },
    // });

    // Generate Transaction ID
    const tran_id = uuidv4();

    // SSL Commerz Initialization URL
    const init_url = "https://sandbox.sslcommerz.com/gwprocess/v3/api.php";
    const is_live = false;

    // Create Form Data
    const formData = new FormData();
    formData.append("store_id", process.env.STORE_ID!);
    formData.append("store_passwd", process.env.STORE_PASSWORD!);
    formData.append("total_amount", course.price!.toString());
    formData.append("currency", "BDT");
    formData.append("tran_id", `${tran_id}`);
    formData.append(
      "success_url",
      `${process.env.NEXT_PUBLIC_APP_URL}/api/success?id=${tran_id}&courseid=${course.id}&userid=${user.id}`
    );
    formData.append(
      "fail_url",
      `${process.env.NEXT_PUBLIC_APP_URL}/api/fail?id=${tran_id}`
    );
    formData.append(
      "cancel_url",
      `${process.env.NEXT_PUBLIC_APP_URL}/api/cancel?id=${tran_id}`
    );
    formData.append(
      "ipn_url",
      `${process.env.NEXT_PUBLIC_APP_URL}/api/ipn?id=${tran_id}`
    );
    formData.append("cus_name", user.firstName! + " " + user.lastName!);
    formData.append(
      "cus_email",
      (
        await clerkClient.emailAddresses.getEmailAddress(
          user.primaryEmailAddressId!
        )
      ).emailAddress
    );
    formData.append("cus_add1", "Shekhertek 8 Dhaka 1207");
    formData.append("cus_city", "Dhaka");
    formData.append("cus_postcode", "1207");
    formData.append("cus_country", "Bangladesh");
    formData.append("cus_phone", "01701063280");
    formData.append("shipping_method", "NO");
    formData.append("product_name", course.title);
    formData.append("product_category", category?.name!);
    formData.append("product_profile", "non-physical-goods");
    formData.append("product_amount", "1");

    // Send Request
    const requestOptions = { method: "POST", body: formData };

    // Get response
    let SSLRes = await fetch(init_url, requestOptions);
    let SSLResJSON = await SSLRes.json();

    return NextResponse.json({ data: SSLResJSON });
  } catch (error) {
    console.log("Course Payment Error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
