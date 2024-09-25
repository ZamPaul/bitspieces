import { NextResponse } from 'next/server';
import { z } from 'zod';

// Zod schema for validating incoming API data
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate the request data
    const parsedData = formSchema.parse(data);

    // Communicate with the database here
    // For example, using Prisma:
    // await prisma.user.create({ data: parsedData });

    return NextResponse.json({ message: "Form submitted successfully!", data: parsedData });
  } catch (error) {
    return NextResponse.json({ message: "Invalid data submitted", error: error.message }, { status: 400 });
  }
}
