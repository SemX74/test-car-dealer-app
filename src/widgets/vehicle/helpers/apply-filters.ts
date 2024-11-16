"use server";

import { redirect } from "next/navigation";

export async function applyFilters(formData: FormData) {
  const makeId = formData.get("makeId");
  const year = formData.get("year");

  redirect(`/result/${makeId}/${year}`);
}
