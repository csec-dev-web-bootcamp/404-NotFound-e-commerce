import { formatZodError } from '../common/format-zod-error';
import { HttpException } from '../common/http-exception';

export function validationPipe(validationSchema){
  return (req, res, next)=> {
    const data = req.body;
    const result = validationSchema.safeParse(data);
    if (!result.success) {
      throw new HttpException(formatZodError(result.error), 400);
    }
    req.body = result.data;
    next();
  }
}
