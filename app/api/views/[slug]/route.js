import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const viewsFilePath = path.join(process.cwd(), 'data', 'views.json');

function getViews() {
    if (!fs.existsSync(viewsFilePath)) {
        return {};
    }
    const fileContents = fs.readFileSync(viewsFilePath, 'utf8');
    try {
        return JSON.parse(fileContents);
    } catch (error) {
        return {};
    }
}

function saveViews(views) {
    fs.writeFileSync(viewsFilePath, JSON.stringify(views, null, 2));
}

export async function GET(request, { params }) {
    const slug = params.slug;
    const views = getViews();
    const count = views[slug] || 0;
    return NextResponse.json({ count });
}

export async function POST(request, { params }) {
    const slug = params.slug;
    const views = getViews();
    views[slug] = (views[slug] || 0) + 1;
    saveViews(views);
    return NextResponse.json({ count: views[slug] });
}
