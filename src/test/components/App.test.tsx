import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils';
import App from '../../App';

describe('App', () => {
  it('should render the main application', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should display loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Syncing LeadBold Assets')).toBeInTheDocument();
  });
});