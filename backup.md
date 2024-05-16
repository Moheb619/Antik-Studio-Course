# MySQL

generator client {
provider = "prisma-client-js"
previewFeatures = ["fullTextSearch"]
}

datasource db {
provider = "mysql"
url = env("DATABASE_URL")
}

model User {
id String @id @default(uuid())
name String
email String? @unique
password String?
emailVerified DateTime?
image String?
isTeacher Boolean @default(false)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
accounts Account[]
sessions Session[]
}

model Account {
id String @id @default(cuid())
userId String
type String?
provider String
providerAccountId String
token_type String?
refresh_token String?
access_token String?
expires_at Int?
scope String?
id_token String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
user User @relation(fields: [userId], references: [id], onDelete: Cascade)

@@unique([provider, providerAccountId])
}

model Session {
id String @id @default(cuid())
userId String?
sessionToken String @unique
accessToken String?
expires DateTime
user User? @relation(fields: [userId], references: [id], onDelete: Cascade)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model VerificationRequest {
id String @id @default(cuid())
identifier String
token String @unique
expires DateTime
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@unique([identifier, token])
}

model Course {
id String @id @default(uuid())
userId String
title String @db.Text
description String? @db.Text
imageUrl String? @db.Text
price Float?
isPublished Boolean @default(false)

categoryId String?
category Category? @relation(fields: [categoryId], references: [id])

chapters Chapter[]
attachments Attachment[]
purchases Purchase[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([categoryId])
// @@fulltext([title])
}

model Category {
id String @id @default(uuid())
name String @unique
courses Course[]
}

model Attachment {
id String @id @default(uuid())
name String
url String @db.Text

courseId String
course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([courseId])
}

model Chapter {
id String @id @default(uuid())
title String
description String? @db.Text
videoUrl String? @db.Text
position Int
isPublished Boolean @default(false)
isFree Boolean @default(false)

muxData MuxData?

courseId String
course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)

userProgress UserProgress[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([courseId])
}

model MuxData {
id String @id @default(uuid())
assetId String
playbackId String?

chapterId String @unique
chapter Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)
}

model UserProgress {
id String @id @default(uuid())
userId String

chapterId String
chapter Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)

isCompleted Boolean @default(false)

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([chapterId])
@@unique([userId, chapterId])
}

model Purchase {
id String @id @default(uuid())
userId String

courseId String
course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt()

@@unique([userId, courseId])
@@index([courseId])
}

# MongoDB

generator client {
provider = "prisma-client-js"
previewFeatures = ["fullTextSearch"]
}

datasource db {
provider = "mongodb"
url = env("DATABASE_URL")
}

model User {
id String @id @default(auto()) @map("\_id") @db.ObjectId
name String
email String? @unique
password String?
emailVerified DateTime?
image String?
isTeacher Boolean @default(false)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
accounts Account[]
sessions Session[]
}

model Account {
id String @id @default(auto()) @map("\_id") @db.ObjectId
userId String @db.ObjectId
type String?
provider String
providerAccountId String
token_type String?
refresh_token String?
access_token String?
expires_at Int?
scope String?
id_token String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
user User @relation(fields: [userId], references: [id], onDelete: Cascade)

@@unique([provider, providerAccountId])
}

model Session {
id String @id @default(auto()) @map("\_id") @db.ObjectId
userId String? @db.ObjectId
sessionToken String @unique
accessToken String?
expires DateTime
user User? @relation(fields: [userId], references: [id], onDelete: Cascade)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model VerificationRequest {
id String @id @default(auto()) @map("\_id") @db.ObjectId
identifier String
token String @unique
expires DateTime
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@unique([identifier, token])
}

model Course {
id String @id @default(auto()) @map("\_id") @db.ObjectId
userId String @db.ObjectId
title String
description String?
imageUrl String?
price Float?
isPublished Boolean @default(false)
categoryId String? @db.ObjectId
category Category? @relation(fields: [categoryId], references: [id])
chapters Chapter[]
attachments Attachment[]
purchases Purchase[]
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model Category {
id String @id @default(auto()) @map("\_id") @db.ObjectId
name String @unique
courses Course[]
}

model Attachment {
id String @id @default(auto()) @map("\_id") @db.ObjectId
name String
url String
courseId String @db.ObjectId
course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model Chapter {
id String @id @default(auto()) @map("\_id") @db.ObjectId
title String
description String?
videoUrl String?
position Int
isPublished Boolean @default(false)
isFree Boolean @default(false)
muxData MuxData?
courseId String @db.ObjectId
course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
userProgress UserProgress[]
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model MuxData {
id String @id @default(auto()) @map("\_id") @db.ObjectId
assetId String
playbackId String?
chapterId String @unique @db.ObjectId
chapter Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)
}

model UserProgress {
id String @id @default(auto()) @map("\_id") @db.ObjectId
userId String @db.ObjectId
chapterId String @db.ObjectId
chapter Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)
isCompleted Boolean @default(false)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@unique([userId, chapterId])
}

model Purchase {
id String @id @default(auto()) @map("\_id") @db.ObjectId
userId String @db.ObjectId
courseId String @db.ObjectId
course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@unique([userId, courseId])
}
