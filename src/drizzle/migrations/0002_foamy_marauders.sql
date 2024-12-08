ALTER TABLE "category" DROP CONSTRAINT "category_parent_id_category_id_fk";
--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "category_id" DROP NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "category" ADD CONSTRAINT "category_parent_id_category_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."category"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
