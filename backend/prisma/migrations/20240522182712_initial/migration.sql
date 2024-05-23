-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "channels" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "channels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" VARCHAR(255),
    "channelid" INTEGER,
    "typeid" INTEGER,
    "categoryid" INTEGER,
    "videourl" VARCHAR(255),

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_auth" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "phone_numer" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255),

    CONSTRAINT "users_auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programs" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "duration" BIGINT,
    "description" TEXT,
    "channelid" INTEGER,
    "typeid" INTEGER,
    "categoryid" INTEGER,
    "videourl" VARCHAR(255),

    CONSTRAINT "programs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_typeid_fkey" FOREIGN KEY ("typeid") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_channelid_fkey" FOREIGN KEY ("channelid") REFERENCES "channels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
