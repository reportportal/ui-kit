import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Breadcrumbs } from './breadcrumbs';

vi.mock('@components/icons', () => ({
  MeatballMenuIcon: () => <span>...</span>,
}));

describe('Breadcrumbs', () => {
  const mockDescriptors = [
    {
      id: 1,
      title: 'Home',
      link: { pathname: '/' },
      onClick: vi.fn(),
    },
    {
      id: 2,
      title: 'Projects',
      link: { pathname: '/projects' },
      onClick: vi.fn(),
    },
    {
      id: 3,
      title: 'Project Alpha',
      link: { pathname: '/projects/alpha' },
      onClick: vi.fn(),
    },
    {
      id: 4,
      title: 'Test Runs',
      link: { pathname: '/projects/alpha/test-runs' },
      onClick: vi.fn(),
    },
    {
      id: 5,
      title: 'Run #12345',
      link: { pathname: '/projects/alpha/test-runs/12345' },
      onClick: vi.fn(),
    },
    {
      id: 6,
      title: 'Test Cases',
      link: { pathname: '/projects/alpha/test-runs/12345/test-cases' },
      onClick: vi.fn(),
    },
  ];

  it('renders back breadcrumb when isBackButton=true', () => {
    render(<Breadcrumbs descriptors={[mockDescriptors[0]]} isBackButton />);
    expect(screen.getByTestId('back-breadcrumb')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders multiple breadcrumbs without hidden breadcrumbs when <= 5', () => {
    render(<Breadcrumbs descriptors={mockDescriptors.slice(0, 5)} />);
    expect(screen.queryByTestId('hidden-breadcrumbs-trigger')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('breadcrumb')).toHaveLength(5);
  });

  it('renders hidden breadcrumbs when > 5 breadcrumbs', () => {
    render(<Breadcrumbs descriptors={mockDescriptors} />);
    expect(screen.getByTestId('hidden-breadcrumbs-trigger')).toBeInTheDocument();
    expect(screen.getAllByTestId('breadcrumb')).toHaveLength(5);
  });

  it('respects custom maxShownDescriptors value', () => {
    render(<Breadcrumbs descriptors={mockDescriptors} maxShownDescriptors={3} />);
    expect(screen.getByTestId('hidden-breadcrumbs-trigger')).toBeInTheDocument();
    expect(screen.getAllByTestId('breadcrumb')).toHaveLength(3);
  });

  it('shows correct hidden breadcrumbs content', () => {
    render(<Breadcrumbs descriptors={mockDescriptors} />);
    expect(screen.queryByTestId('hidden-breadcrumbs-content')).not.toBeInTheDocument();

    const hiddenBreadcrumbsTrigger = screen.getByTestId('hidden-breadcrumbs-trigger');
    fireEvent.click(hiddenBreadcrumbsTrigger);

    expect(screen.getByTestId('hidden-breadcrumbs-content')).toBeInTheDocument();
  });

  it('renders with data automation id', () => {
    render(<Breadcrumbs descriptors={mockDescriptors} dataAutomationId="test-breadcrumbs" />);
    expect(screen.getByTestId('test-breadcrumbs')).toBeInTheDocument();
  });
});
