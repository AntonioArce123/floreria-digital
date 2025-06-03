import { Request, Response } from 'express'
import { z } from 'zod'
import { db } from '../db'

const personalSchema = z.object({
  nombre: z.string().min(1),
  direccion: z.string().min(1),
  telefono: z.string().min(1),
  estatus: z.number().refine(val => val === 1 || val === 2)
})

export const getPersonal = async (_req: Request, res: Response): Promise<void> => {
  const [rows] = await db.execute('SELECT * FROM personal WHERE estatus = 1')
  res.json(rows)
}

export const createPersonal = async (req: Request, res: Response): Promise<void> => {
  const validacion = personalSchema.safeParse(req.body)
  if (!validacion.success) {
    res.status(400).json(validacion.error)
    return
  }

  const { nombre, direccion, telefono, estatus } = validacion.data
  await db.execute(
    'INSERT INTO personal (nombre, direccion, telefono, estatus) VALUES (?, ?, ?, ?)',
    [nombre, direccion, telefono, estatus]
  )
  res.json({ mensaje: 'Personal agregado' })
}

export const updatePersonal = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const validacion = personalSchema.safeParse(req.body)
  if (!validacion.success) {
    res.status(400).json(validacion.error)
    return
  }

  const { nombre, direccion, telefono, estatus } = validacion.data
  await db.execute(
    'UPDATE personal SET nombre = ?, direccion = ?, telefono = ?, estatus = ? WHERE id = ?',
    [nombre, direccion, telefono, estatus, id]
  )
  res.json({ mensaje: 'Personal actualizado' })
}

export const deletePersonal = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  await db.execute('UPDATE personal SET estatus = 2 WHERE id = ?', [id])
  res.json({ mensaje: 'Personal dado de baja' })
}
