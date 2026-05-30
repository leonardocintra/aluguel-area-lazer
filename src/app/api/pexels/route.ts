import { NextResponse } from "next/server";

const PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const apiKey = process.env.PEXELS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing PEXELS_API_KEY in environment variables." },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "people";
  const perPage = searchParams.get("per_page");
  const orientation = searchParams.get("orientation");

  const pexelsSearchParams = new URLSearchParams({ query });

  if (perPage) {
    pexelsSearchParams.set("per_page", perPage);
  }

  if (orientation) {
    pexelsSearchParams.set("orientation", orientation);
  }

  try {
    const pexelsResponse = await fetch(
      `${PEXELS_SEARCH_URL}?${pexelsSearchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
        cache: "no-store",
      },
    );

    if (!pexelsResponse.ok) {
      const errorText = await pexelsResponse.text();

      return NextResponse.json(
        {
          error: "Failed to fetch images from Pexels.",
          details: errorText,
        },
        { status: pexelsResponse.status },
      );
    }

    const data = await pexelsResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unexpected error while calling Pexels API.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
