import { dbContext } from "../db/DbContext";


class JobsService {
  async create(body) {
    let job = await dbContext.Jobs.create(body)
    return job
  }

  async getAll() {
    let jobs = await dbContext.Jobs.find()
    return jobs
  }
}

export const jobsService = new JobsService()