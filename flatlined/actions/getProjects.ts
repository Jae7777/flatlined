import prisma from '../lib/prismadb'
import { Project } from '@prisma/client'

export interface IProjectsParams {

}

export default async function getProjects(
  params: IProjectsParams
) {
  try {

    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc' 
      }
    })

    return projects
  }
  catch (error: any) {
    throw new Error(error)
  }
}