
import { useState, useEffect, createContext, useContext } from 'react';
import { User, UserRole } from '../../models/user.model';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User>, password: string) => Promise<void>;
  logout: () => void;
}

// Mock users for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@interviewai.com',
    firstName: 'Admin',
    lastName: 'User',
    role: UserRole.ADMIN,
    createdAt: new Date().toISOString(),
    password: 'admin123'
  },
  {
    id: '2',
    email: 'recruiter@interviewai.com',
    firstName: 'Recruiter',
    lastName: 'Smith',
    role: UserRole.RECRUITER,
    company: 'Tech Innovators Inc.',
    position: 'Senior Technical Recruiter',
    createdAt: new Date().toISOString(),
    password: 'recruiter123'
  },
  {
    id: '3',
    email: 'candidate@interviewai.com',
    firstName: 'Candidate',
    lastName: 'Johnson',
    role: UserRole.CANDIDATE,
    skills: ['React', 'TypeScript', 'Node.js'],
    experience: '3 years',
    createdAt: new Date().toISOString(),
    password: 'candidate123'
  }
];

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for saved user in localStorage on initial load
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user'); // Remove corrupted data
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // Remove password before storing
      const { password: _, ...safeUser } = foundUser;
      
      // Clone the user object to ensure it's properly serialized
      const userToStore = JSON.parse(JSON.stringify(safeUser));
      
      setUser(userToStore);
      localStorage.setItem('user', JSON.stringify(userToStore));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Partial<User>, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would be an API call to register the user
      const newUser = {
        ...userData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
      } as User;
      
      // Clone the user object to ensure it's properly serialized
      const userToStore = JSON.parse(JSON.stringify(newUser));
      
      setUser(userToStore);
      localStorage.setItem('user', JSON.stringify(userToStore));
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
