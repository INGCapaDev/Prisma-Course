import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

export async function GET(request, { params }) {
  const { id } = params;
  if (isNaN(id)) {
    return NextResponse.json(
      { message: 'El id debe ser un número' },
      { status: 400 }
    );
  }

  const task = await prisma.task.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const data = await request.json();

  try {
    await prisma.task.update({ where: { id: Number(params.id) }, data });
    return NextResponse.json({
      message: 'Tarea ' + params.id + ' actualizada exitosamente',
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  if (isNaN(id)) {
    return NextResponse.json(
      { message: 'El id debe ser un número' },
      { status: 400 }
    );
  }

  try {
    const task = await prisma.task.delete({ where: { id: Number(id) } });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
