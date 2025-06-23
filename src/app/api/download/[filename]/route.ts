import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { readFile } from "fs/promises";
import { join } from "path";
import { authOptions } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized. Please login to download files." },
        { status: 401 }
      );
    }

    const { filename } = await params;

    // Validate filename to prevent directory traversal
    const allowedFiles = [
      "marketing_booklet_en.pdf",
      "marketing_booklet_zh.pdf",
      "marketing_booklet_zh_tw.pdf",
      "Revised technical booklet English.pdf",
      "Revised technical booklet concept_simplified-chinese.pdf",
      "Revised technical booklet concept_traditional-chinese.pdf",
    ];

    if (!allowedFiles.includes(filename)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Get file path
    const filePath = join(process.cwd(), "public", "downloads", filename);

    try {
      // Read the file
      const fileBuffer = await readFile(filePath);

      // Return the file with appropriate headers
      return new NextResponse(fileBuffer as unknown as BodyInit, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${filename}"`,
          "Cache-Control": "private, no-cache, no-store, must-revalidate",
        },
      });
    } catch (fileError) {
      console.error("File read error:", fileError);
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
