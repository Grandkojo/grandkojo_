import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminDb } from "@/lib/firebase-admin";

function getDateKey() {
  return new Date().toISOString().slice(0, 10);
}

export async function POST() {
  try {
    const db = getAdminDb();
    const dateKey = getDateKey();
    const ref = db.collection("analytics").doc("site_stats");

    await ref.set(
      {
        visits: FieldValue.increment(1),
        daily: {
          [dateKey]: FieldValue.increment(1),
        },
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to increment site visit:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
