import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        instructor: {
          select: { name: true }
        },
        _count: {
          select: { modules: true, enrollments: true }
        }
      }
    });
    return NextResponse.json({ success: true, count: courses.length, data: courses });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const course = await prisma.course.create({
      data: {
        title: body.title,
        description: body.description,
        price: body.price,
        instructorId: body.instructorId // Note: In a real app, infer from auth token
      }
    });
    return NextResponse.json({ success: true, data: course }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
