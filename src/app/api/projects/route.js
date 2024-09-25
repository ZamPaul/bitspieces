import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const uploadsDir = path.join(process.cwd(), 'uploads');

  // Ensure the uploads directory exists
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  const formData = await request.formData();

  const title = formData.get('title');
  const description = formData.get('description');
  const image = formData.get('image');

  if (!image) {
    return NextResponse.json({ message: "No image uploaded" ,error: 'No image uploaded' }, { status: 400 });
  }

  // Read the file as an ArrayBuffer and convert it to a Buffer
  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Save the file to the uploads directory
  const filePath = path.join(uploadsDir, image.name);

  try {
    fs.writeFileSync(filePath, buffer);
    return NextResponse.json({ message: "file successfully saved", success: true, data: { title: title, description: description }});
  } catch (error) {
    console.error('File save error', error);
    return NextResponse.json({ message: "file save error",  error: 'File save error' }, { status: 500 });
  }
}
