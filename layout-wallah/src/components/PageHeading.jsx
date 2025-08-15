import { Link } from "react-router-dom";

const PageHeading = ({ title }) => {
  return (
    <div className="h-[40vh] bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D')]  content-center text-background text-center bg-cover bg-center">
      <div className="h-full content-center bg-black/50">
        <h6 className="text-[2.5rem] font-bold uppercase">{title}</h6>
        <div className="flex justify-center">
          <div className="breadcrumbs text-sm text-backgrond2">
            <ul>
              <li>
                <Link to={"/"}>
                  <i className="bx bx-home"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
