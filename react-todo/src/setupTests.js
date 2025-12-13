import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// This explicitly extends Vitest's expect function 
// with all the custom DOM matchers (e.g., toBeInTheDocument)
expect.extend(matchers);