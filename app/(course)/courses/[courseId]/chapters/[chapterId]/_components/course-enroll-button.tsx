"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (data?.data?.data?.GatewayPageURL) {
      window.location.assign(data?.data?.data?.GatewayPageURL);
    }
  }, [data]);

  const onClick = async () => {
    try {
      setIsLoading(false);
      setIsLoading(true);
      const res = await axios.post(`/api/courses/${courseId}/checkout`);
      setData(res);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={onClick}
        disabled={isLoading}
        size="sm"
        className="w-full md:w-auto"
      >
        Enroll for {formatPrice(price)}
      </Button>
    </>
  );
};
