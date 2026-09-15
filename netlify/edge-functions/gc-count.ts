export default async (request: Request) => {
    const url = new URL(request.url);

    const gcUrl = `https://eranmonnie.goatcounter.com/count?${url.searchParams}`;

    // Forward relevant headers so GoatCounter sees the real visitor
    await fetch(gcUrl, {
        headers: {
            'Referer': request.headers.get('referer') ?? '',
            'User-Agent': request.headers.get('user-agent') ?? '',
            'X-Forwarded-For': request.headers.get('x-forwarded-for') ?? '',
        },
    }).catch(() => {});

    return new Response('', { status: 200 });
};

export const config = { path: '/gc/count' };
