-- CreateTable
CREATE TABLE "Bankaccounts" (
    "id" BIGSERIAL NOT NULL,
    "user_id" VARCHAR(6) NOT NULL,
    "bank_name" VARCHAR(50) NOT NULL,
    "acc_number" VARCHAR(20) NOT NULL,

    CONSTRAINT "Bankaccounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accidentreport_accidentreport" (
    "id" BIGSERIAL NOT NULL,
    "insurer" VARCHAR(255),
    "address" VARCHAR(255),
    "date" DATE,
    "accident_time" TIME(6),
    "images" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "vehicle_id" BIGINT NOT NULL,

    CONSTRAINT "accidentreport_accidentreport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts_customuser" (
    "id" BIGSERIAL NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "last_login" TIMESTAMPTZ(6),
    "is_superuser" BOOLEAN NOT NULL,
    "username" VARCHAR(150) NOT NULL,
    "first_name" VARCHAR(150) NOT NULL,
    "last_name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "is_staff" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "date_joined" TIMESTAMPTZ(6) NOT NULL,
    "phone_number" VARCHAR(15) NOT NULL,
    "lang" VARCHAR(2) NOT NULL,
    "avatar" VARCHAR(100),
    "otp" VARCHAR(255),
    "otp_timestamp" INTEGER,
    "is_available" BOOLEAN NOT NULL DEFAULT false,
    "user_type" INTEGER NOT NULL DEFAULT 1,
    "active_status" INTEGER DEFAULT 1,

    CONSTRAINT "accounts_customuser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts_customuser_groups" (
    "id" BIGSERIAL NOT NULL,
    "customuser_id" BIGINT NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "accounts_customuser_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts_customuser_user_permissions" (
    "id" BIGSERIAL NOT NULL,
    "customuser_id" BIGINT NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "accounts_customuser_user_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advert_advert" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "desc" VARCHAR(200) NOT NULL,
    "category" VARCHAR(200) NOT NULL,
    "priority" VARCHAR(200) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "expire_date" TIMESTAMPTZ(6),
    "image" VARCHAR(100),

    CONSTRAINT "advert_advert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_group" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "auth_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_group_permissions" (
    "id" BIGSERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "auth_group_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_permission" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content_type_id" INTEGER NOT NULL,
    "codename" VARCHAR(100) NOT NULL,

    CONSTRAINT "auth_permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authtoken_token" (
    "key" VARCHAR(40) NOT NULL,
    "created" TIMESTAMPTZ(6) NOT NULL,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "authtoken_token_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "azi" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255),

    CONSTRAINT "azi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "azii" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255),

    CONSTRAINT "azii_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolo_bolo" (
    "id" BIGSERIAL NOT NULL,
    "inspection_date" DATE,
    "expire_date" DATE,
    "image" VARCHAR(100),
    "notification_status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "vehicle_id" BIGINT NOT NULL,

    CONSTRAINT "bolo_bolo_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "chapapayment_paymentmodel" (
    "id" BIGSERIAL NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "tx_ref" VARCHAR(100) NOT NULL,
    "callback_url" VARCHAR(200) NOT NULL,
    "return_url" VARCHAR(200) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "chapapayment_paymentmodel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_admin_log" (
    "id" SERIAL NOT NULL,
    "action_time" TIMESTAMPTZ(6) NOT NULL,
    "object_id" TEXT,
    "object_repr" VARCHAR(200) NOT NULL,
    "action_flag" SMALLINT NOT NULL,
    "change_message" TEXT NOT NULL,
    "content_type_id" INTEGER,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "django_admin_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_content_type" (
    "id" SERIAL NOT NULL,
    "app_label" VARCHAR(100) NOT NULL,
    "model" VARCHAR(100) NOT NULL,

    CONSTRAINT "django_content_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_migrations" (
    "id" BIGSERIAL NOT NULL,
    "app" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "applied" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "django_migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_session" (
    "session_key" VARCHAR(40) NOT NULL,
    "session_data" TEXT NOT NULL,
    "expire_date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "django_session_pkey" PRIMARY KEY ("session_key")
);

-- CreateTable
CREATE TABLE "document_document" (
    "id" BIGSERIAL NOT NULL,
    "images" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "document_document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drivinglicense_drivinglicense" (
    "id" BIGSERIAL NOT NULL,
    "full_name" VARCHAR(255),
    "issue_date" DATE,
    "expire_date" DATE,
    "image" VARCHAR(100),
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "user_id" BIGINT NOT NULL,
    "license_number" VARCHAR(255),
    "license_mode" VARCHAR(255),

    CONSTRAINT "drivinglicense_drivinglicense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fullinsurance_fullinsurance" (
    "id" BIGSERIAL NOT NULL,
    "insurer" VARCHAR(255),
    "issue_date" DATE,
    "expire_date" DATE,
    "notification_status" BOOLEAN NOT NULL,
    "images" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "vehicle_id" BIGINT NOT NULL,

    CONSTRAINT "fullinsurance_fullinsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" BIGSERIAL NOT NULL,
    "lat" VARCHAR(100) NOT NULL,
    "lon" VARCHAR(100) NOT NULL,
    "area_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "map_map" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(254) NOT NULL,

    CONSTRAINT "map_map_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "news" (
    "id" BIGSERIAL NOT NULL,
    "headline" TEXT,
    "content" TEXT,
    "source" TEXT,
    "url" TEXT,
    "publication_date" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "user_id" BIGINT NOT NULL,
    "category_id" BIGINT,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_categories" (
    "id" BIGSERIAL NOT NULL,
    "category_description" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "news_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_media" (
    "id" BIGSERIAL NOT NULL,
    "file_path" TEXT NOT NULL,
    "media_type" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "news_id" BIGINT NOT NULL,

    CONSTRAINT "news_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oilservice_oilservice" (
    "id" BIGSERIAL NOT NULL,
    "fill_date" DATE,
    "next_service_date" VARCHAR(255),
    "expire_date" DATE,
    "notification_status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "vehicle_id" BIGINT NOT NULL,

    CONSTRAINT "oilservice_oilservice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_ordertype" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "order_ordertype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" BIGSERIAL NOT NULL,
    "item" BIGINT NOT NULL,
    "quantity" VARCHAR(100),
    "pickup_address" JSONB,
    "delivery_address" JSONB,
    "expected_time" VARCHAR(50) NOT NULL,
    "order_date" TIMESTAMPTZ(6) NOT NULL,
    "delivered_date" TIMESTAMPTZ(6),
    "status" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "customer_id_id" BIGINT NOT NULL,
    "rider_id_id" BIGINT,
    "item_type_id" BIGINT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" BIGSERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "user_id" BIGINT NOT NULL,
    "item_id" BIGINT NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadfund_roadfund" (
    "id" BIGSERIAL NOT NULL,
    "issue_date" DATE,
    "expire_date" DATE,
    "image" VARCHAR(100),
    "vehicle_id" BIGINT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "notification_status" BOOLEAN NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "roadfund_roadfund_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sparepart_brands" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "logo" VARCHAR(100),

    CONSTRAINT "sparepart_brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sparepart_sparepartcategory" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "sparepart_sparepartcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spareparts" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "price" VARCHAR(100) NOT NULL,
    "image" VARCHAR(100),
    "weight" VARCHAR(100),
    "is_available" BOOLEAN NOT NULL,
    "supplier_id" BIGINT NOT NULL,
    "brand_id" BIGINT,
    "category_id" BIGINT,

    CONSTRAINT "spareparts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "lat" VARCHAR(50),
    "lon" VARCHAR(50),
    "area_name" VARCHAR(100),
    "logo" VARCHAR(100),

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thirdparty_thirdparty" (
    "id" BIGSERIAL NOT NULL,
    "insurer" VARCHAR(255),
    "issue_date" DATE,
    "expire_date" DATE,
    "image" VARCHAR(100),
    "notification_status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "vehicle_id" BIGINT NOT NULL,

    CONSTRAINT "thirdparty_thirdparty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "vehicle_vehicle" (
    "id" BIGSERIAL NOT NULL,
    "plate_number" VARCHAR(255) NOT NULL,
    "brand" VARCHAR(255),
    "model" VARCHAR(255),
    "image" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "vehicle_vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "videos" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "duration" BIGINT,
    "description" TEXT,
    "channelid" INTEGER,
    "typeid" INTEGER,
    "categoryid" INTEGER,
    "videourl" VARCHAR(255),

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallet" (
    "id" BIGSERIAL NOT NULL,
    "rider_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "rider_name" VARCHAR(200) NOT NULL,
    "rider_last_name" VARCHAR(200) NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "location_from" VARCHAR(200) NOT NULL,
    "location_to" VARCHAR(200) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "yeneboloeth_yeneboloeth1" (
    "id" BIGSERIAL NOT NULL,
    "customer_name" VARCHAR(200) NOT NULL,
    "plate_number" VARCHAR(200) NOT NULL,
    "phone_number" VARCHAR(200) NOT NULL,
    "inspect_date" DATE NOT NULL,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "yeneboloeth_yeneboloeth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "accidentreport_accidentreport_vehicle_id_b7157f54" ON "accidentreport_accidentreport"("vehicle_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_customuser_username_key" ON "accounts_customuser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_customuser_phone_number_key" ON "accounts_customuser"("phone_number");

-- CreateIndex
CREATE INDEX "accounts_customuser_phone_number_32c4e511_like" ON "accounts_customuser"("phone_number");

-- CreateIndex
CREATE INDEX "accounts_customuser_username_722f3555_like" ON "accounts_customuser"("username");

-- CreateIndex
CREATE INDEX "accounts_customuser_groups_customuser_id_bc55088e" ON "accounts_customuser_groups"("customuser_id");

-- CreateIndex
CREATE INDEX "accounts_customuser_groups_group_id_86ba5f9e" ON "accounts_customuser_groups"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_customuser_groups_customuser_id_group_id_c074bdcb_uniq" ON "accounts_customuser_groups"("customuser_id", "group_id");

-- CreateIndex
CREATE INDEX "accounts_customuser_user_permissions_customuser_id_0deaefae" ON "accounts_customuser_user_permissions"("customuser_id");

-- CreateIndex
CREATE INDEX "accounts_customuser_user_permissions_permission_id_aea3d0e5" ON "accounts_customuser_user_permissions"("permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_customuser_user_customuser_id_permission_9632a709_uniq" ON "accounts_customuser_user_permissions"("customuser_id", "permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_group_name_key" ON "auth_group"("name");

-- CreateIndex
CREATE INDEX "auth_group_name_a6ea08ec_like" ON "auth_group"("name");

-- CreateIndex
CREATE INDEX "auth_group_permissions_group_id_b120cbf9" ON "auth_group_permissions"("group_id");

-- CreateIndex
CREATE INDEX "auth_group_permissions_permission_id_84c5c92e" ON "auth_group_permissions"("permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ON "auth_group_permissions"("group_id", "permission_id");

-- CreateIndex
CREATE INDEX "auth_permission_content_type_id_2f476e4b" ON "auth_permission"("content_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_permission_content_type_id_codename_01ab375a_uniq" ON "auth_permission"("content_type_id", "codename");

-- CreateIndex
CREATE UNIQUE INDEX "authtoken_token_user_id_key" ON "authtoken_token"("user_id");

-- CreateIndex
CREATE INDEX "authtoken_token_key_10f0b77e_like" ON "authtoken_token"("key");

-- CreateIndex
CREATE INDEX "bolo_bolo_vehicle_id_b18a6191" ON "bolo_bolo"("vehicle_id");

-- CreateIndex
CREATE INDEX "django_admin_log_content_type_id_c4bce8eb" ON "django_admin_log"("content_type_id");

-- CreateIndex
CREATE INDEX "django_admin_log_user_id_c564eba6" ON "django_admin_log"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "django_content_type_app_label_model_76bd3d3b_uniq" ON "django_content_type"("app_label", "model");

-- CreateIndex
CREATE INDEX "django_session_expire_date_a5c62663" ON "django_session"("expire_date");

-- CreateIndex
CREATE INDEX "django_session_session_key_c0390e0f_like" ON "django_session"("session_key");

-- CreateIndex
CREATE INDEX "document_document_user_id_6b8a36d4" ON "document_document"("user_id");

-- CreateIndex
CREATE INDEX "drivinglicense_drivinglicense_user_id_54f8ec8f" ON "drivinglicense_drivinglicense"("user_id");

-- CreateIndex
CREATE INDEX "fullinsurance_fullinsurance_vehicle_id_128e0bcf" ON "fullinsurance_fullinsurance"("vehicle_id");

-- CreateIndex
CREATE INDEX "news_category_id_798ee23f" ON "news"("category_id");

-- CreateIndex
CREATE INDEX "news_user_id_f58d07aa" ON "news"("user_id");

-- CreateIndex
CREATE INDEX "news_media_news_id_f63c7320" ON "news_media"("news_id");

-- CreateIndex
CREATE INDEX "oilservice_oilservice_vehicle_id_b250d2f0" ON "oilservice_oilservice"("vehicle_id");

-- CreateIndex
CREATE INDEX "orders_customer_id_id_3b8bbd0a" ON "orders"("customer_id_id");

-- CreateIndex
CREATE INDEX "orders_item_type_id_592ba330" ON "orders"("item_type_id");

-- CreateIndex
CREATE INDEX "orders_rider_id_id_974d7619" ON "orders"("rider_id_id");

-- CreateIndex
CREATE INDEX "ratings_item_id_1d11e4c9" ON "ratings"("item_id");

-- CreateIndex
CREATE INDEX "ratings_user_id_dbf12542" ON "ratings"("user_id");

-- CreateIndex
CREATE INDEX "roadfund_roadfund_vehicle_id_15d9e83d" ON "roadfund_roadfund"("vehicle_id");

-- CreateIndex
CREATE INDEX "spareparts_brand_id_4498a793" ON "spareparts"("brand_id");

-- CreateIndex
CREATE INDEX "spareparts_category_id_be08cc06" ON "spareparts"("category_id");

-- CreateIndex
CREATE INDEX "spareparts_supplier_id_99ad1ac3" ON "spareparts"("supplier_id");

-- CreateIndex
CREATE INDEX "thirdparty_thirdparty_vehicle_id_046658fc" ON "thirdparty_thirdparty"("vehicle_id");

-- CreateIndex
CREATE INDEX "vehicle_vehicle_user_id_efa05a86" ON "vehicle_vehicle"("user_id");

-- CreateIndex
CREATE INDEX "yeneboloeth_yeneboloeth_user_id_0e3ac438" ON "yeneboloeth_yeneboloeth1"("user_id");

-- AddForeignKey
ALTER TABLE "accidentreport_accidentreport" ADD CONSTRAINT "accidentreport_accid_vehicle_id_b7157f54_fk_vehicle_v" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle_vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accounts_customuser_groups" ADD CONSTRAINT "accounts_customuser__customuser_id_bc55088e_fk_accounts_" FOREIGN KEY ("customuser_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accounts_customuser_groups" ADD CONSTRAINT "accounts_customuser_groups_group_id_86ba5f9e_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "auth_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accounts_customuser_user_permissions" ADD CONSTRAINT "accounts_customuser__customuser_id_0deaefae_fk_accounts_" FOREIGN KEY ("customuser_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accounts_customuser_user_permissions" ADD CONSTRAINT "accounts_customuser__permission_id_aea3d0e5_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "auth_permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth_group_permissions" ADD CONSTRAINT "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "auth_permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth_group_permissions" ADD CONSTRAINT "auth_group_permissions_group_id_b120cbf9_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "auth_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth_permission" ADD CONSTRAINT "auth_permission_content_type_id_2f476e4b_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "django_content_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "authtoken_token" ADD CONSTRAINT "authtoken_token_user_id_35299eff_fk_accounts_customuser_id" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bolo_bolo" ADD CONSTRAINT "bolo_bolo_vehicle_id_b18a6191_fk_vehicle_vehicle_id" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle_vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "django_admin_log" ADD CONSTRAINT "django_admin_log_content_type_id_c4bce8eb_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "django_content_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "django_admin_log" ADD CONSTRAINT "django_admin_log_user_id_c564eba6_fk_accounts_customuser_id" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "document_document" ADD CONSTRAINT "document_document_user_id_6b8a36d4_fk_accounts_customuser_id" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "drivinglicense_drivinglicense" ADD CONSTRAINT "drivinglicense_drivi_user_id_54f8ec8f_fk_accounts_" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fullinsurance_fullinsurance" ADD CONSTRAINT "fullinsurance_fullin_vehicle_id_128e0bcf_fk_vehicle_v" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle_vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_channelid_fkey" FOREIGN KEY ("channelid") REFERENCES "channels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_typeid_fkey" FOREIGN KEY ("typeid") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_category_id_798ee23f_fk_news_categories_id" FOREIGN KEY ("category_id") REFERENCES "news_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_user_id_f58d07aa_fk_accounts_customuser_id" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "news_media" ADD CONSTRAINT "news_media_news_id_f63c7320_fk_news_id" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "oilservice_oilservice" ADD CONSTRAINT "oilservice_oilservice_vehicle_id_b250d2f0_fk_vehicle_vehicle_id" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle_vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_id_3b8bbd0a_fk_accounts_customuser_id" FOREIGN KEY ("customer_id_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_item_type_id_592ba330_fk_order_ordertype_id" FOREIGN KEY ("item_type_id") REFERENCES "order_ordertype"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_rider_id_id_974d7619_fk_accounts_customuser_id" FOREIGN KEY ("rider_id_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_item_id_1d11e4c9_fk_spareparts_id" FOREIGN KEY ("item_id") REFERENCES "spareparts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_user_id_dbf12542_fk_accounts_customuser_id" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roadfund_roadfund" ADD CONSTRAINT "roadfund_roadfund_vehicle_id_15d9e83d_fk_vehicle_vehicle_id" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle_vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "spareparts" ADD CONSTRAINT "spareparts_brand_id_4498a793_fk_sparepart_brands_id" FOREIGN KEY ("brand_id") REFERENCES "sparepart_brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "spareparts" ADD CONSTRAINT "spareparts_category_id_be08cc06_fk_sparepart" FOREIGN KEY ("category_id") REFERENCES "sparepart_sparepartcategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "spareparts" ADD CONSTRAINT "spareparts_supplier_id_99ad1ac3_fk_suppliers_id" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "thirdparty_thirdparty" ADD CONSTRAINT "thirdparty_thirdparty_vehicle_id_046658fc_fk_vehicle_vehicle_id" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle_vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle_vehicle" ADD CONSTRAINT "vehicle_vehicle_user_id_efa05a86_fk_accounts_customuser_id" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "yeneboloeth_yeneboloeth1" ADD CONSTRAINT "yeneboloeth_yenebolo_user_id_0e3ac438_fk_accounts_" FOREIGN KEY ("user_id") REFERENCES "accounts_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
