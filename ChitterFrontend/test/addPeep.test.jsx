import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import AddPeep from '../src/components/Homepage/Peeps/AddPeep';
// import { addPeepData } from '../util/dataServiceCall.js';

// vi.mock('../util/dataServiceCall.js');
describe('Add Peep Component Tests', () => {
    test('should render a login prompt when the user is not logged in if they want to peep', () => {
        render(<AddPeep addPeep={() => { }} />);
        expect(screen.getByText(/Sign up or log in to peep!/i)).toBeInTheDocument();
    });


});