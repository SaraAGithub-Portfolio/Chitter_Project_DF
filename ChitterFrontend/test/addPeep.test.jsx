import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import AddPeep from '../src/components/Homepage/Peeps/addPeep';
// import { addPeepData } from '../util/dataServiceCall.js';

vi.mock('../util/dataServiceCall.js');



describe('Add Peep Component Tests', () => {
    test('should render a login prompt when the user is not logged in if they want to peep', () => {
        render(<AddPeep addPeep={() => { }} />);
        expect(screen.getByText(/please log in to post a peep/i)).toBeInTheDocument();

    });
    // test('should allow a logged-in user to add a peep', async () => {
    //     render(<AddPeep user={{ username: "Eleven" }} />);

    //     const input = screen.getByPlaceholderText("Type here...");
    //     userEvent.type(input, "Some new peep message");
    //     userEvent.click(screen.getByText("Peep it!"));

    //     expect(addPeepData).toHaveBeenCalledWith({
    //         username: "Eleven",
    //         peepMessage: "New Message",
    //         date: expect.any(String)
    //     });
    // });
});