// api/laticinios/[id].js
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

const filePath = process.cwd() + '/src/app/api/db.json';

export async function GET(request, { params }) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const id = parseInt(params.id, 10);
    
    if (id > 0) {
      const queijo = data.queijos.find(queijo => queijo.id === id);
      return queijo ? NextResponse.json(queijo) : NextResponse.json({ "status": "error", "message": "Queijo não encontrado" });
    } else {
      return NextResponse.json(data.queijos);
    }
  } catch (error) {
    return NextResponse.json({ "status": "error", "message": "Erro no servidor" });
  }
}

export async function POST(request, response) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const body = await request.json();

    for (let x = 0; x < data.queijos.length; x++) {
      const queijo = data.queijos[x];
      if (queijo.id === body.id) {
        return NextResponse.json({ "status": "ok", "message": "Queijo já registrado" });
      }
    }

    data.queijos.push(body);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ "status": "ok", "message": "Queijo registrado com sucesso" });
  } catch (error) {
    return NextResponse.json({ "status": "error", "message": "Erro no servidor" });
  }
}
