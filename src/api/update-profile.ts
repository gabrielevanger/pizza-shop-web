import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}
export function updateProfile({ name, description }: UpdateProfileBody) {
  return api.put('/profile', { name, description })
}
