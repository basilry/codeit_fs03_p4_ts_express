declare global {
  namespace Express {
    interface Request {
      valid?: boolean
    }
  }
}