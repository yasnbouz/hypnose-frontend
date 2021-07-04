import React from 'react';
import { render, screen } from '@testing-library/react';
import Test from '@/components/Test';

describe('Test Component', () => {
    it('should render', () => {
        render(<Test />);
        screen.debug();
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
