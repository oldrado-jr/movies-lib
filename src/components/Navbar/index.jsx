import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './styles.css';

const Navbar = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <nav id="navbar">
      <menu>
        <li>
          <h2>
            <Link to="/">
              <BiCameraMovie />
              MoviesLib
            </Link>
          </h2>
        </li>
        <li>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Busque um filme"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </li>
      </menu>
    </nav>
  );
};

export default Navbar;
