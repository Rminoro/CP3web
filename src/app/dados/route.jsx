// import { NextResponse } from "next/server";

// const usuarios = [
//     {id: 1, nome: 'Ana', email: 'email@fiap.com'},
//     {id: 2, nome: 'João', email: 'email@fiap.com'},
//     {id: 3, nome: 'Maria', email: 'email@fiap.com'},
//     {id: 4, nome: 'José', email: 'email@fiap.com'},
//     {id: 5, nome: 'Paulo', email: 'email@fiap.com'},
//     {id: 6, nome: 'rafae', email: 'email@fiap.com'}
//     ];
     
// export async function GET(){
//     return NextResponse.json(usuarios);
// }
// Importe o módulo 'fs' para lidar com leitura de arquivos
import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

const usuariosFilePath = path.resolve(process.cwd(), '/src/app/api/base/users/db.json');

export async function GET() {
  try {
    // Leia os dados do arquivo 'db.json'

    const content = await fs.readFile(usuariosFilePath, 'utf-8');
    const data = JSON.parse(content);

    return NextResponse.json(data.usuarios);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
    return NextResponse.error('Erro interno do servidor');
  }
}
