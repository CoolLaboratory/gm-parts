import { sequence } from '@sveltejs/kit/hooks';
import { first } from './hooks' 


 
export const handle = sequence(first);
