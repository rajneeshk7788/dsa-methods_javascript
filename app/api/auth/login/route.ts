import { NextResponse } from 'next/server';
import { AuthController } from '@/app/controllers/authController';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await AuthController.login(body);
    return NextResponse.json(result);
  } catch (error) {
    return AuthController.handleError(error);
  }
} 