import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import LinkTab from "@mui/material/Tab";
import { yellow } from "@mui/material/colors";

function Homebar() {
  const bool = true;
  const bool1 = false;
  const bool2 = false;
  const bool3 = false;
  const bool4 = false;
  const [activeLink, setactiveLink] = useState(bool);
  const ActiveLink = () => {
    setactiveLink(bool);
    setactiveLink1(bool1);
    setactiveLink2(bool2);
    setactiveLink4(bool3);
    setactiveLink3(bool4);
  };

  const [activeLink1, setactiveLink1] = useState(bool1);
  const ActiveLink1 = () => {
    setactiveLink(!bool);
    setactiveLink1(!bool1);
    setactiveLink2(bool2);
    setactiveLink3(bool3);
    setactiveLink4(bool4);
  };

  const [activeLink2, setactiveLink2] = useState(bool2);
  const ActiveLink2 = () => {
    setactiveLink(!bool);
    setactiveLink1(bool1);
    setactiveLink2(!bool2);
    setactiveLink3(bool3);
    setactiveLink4(bool4);
  };

  const [activeLink3, setactiveLink3] = useState(bool3);
  const ActiveLink3 = () => {
    setactiveLink(!bool);
    setactiveLink1(bool1);
    setactiveLink2(bool2);
    setactiveLink3(!bool3);
    setactiveLink4(bool4);
  };

  const [activeLink4, setactiveLink4] = useState(bool4);
  const ActiveLink4 = () => {
    setactiveLink(!bool);
    setactiveLink1(bool1);
    setactiveLink2(bool2);
    setactiveLink3(bool3);
    setactiveLink4(!bool4);
  };

  const links = [
    {
      index: 0,
      to: "/",
      onClick: ActiveLink,
      active: activeLink,
      label: "Top deals",
    },
    {
      index: 1,
      to: "/fuguFabric",
      onClick: ActiveLink1,
      active: activeLink1,
      label: "Fugu",
    },
    {
      index: 2,
      to: "/kente",
      onClick: ActiveLink2,
      active: activeLink2,
      label: "Kente",
    },
    {
      index: 3,
      to: "/africanprint",
      onClick: ActiveLink3,
      active: activeLink3,
      label: "African Print",
    },
    {
      index: 4,
      to: "/accessories",
      onClick: ActiveLink4,
      active: activeLink4,
      label: "Accessories",
    },
  ];

  //const [value, setValue] = React.useState(0);

  //const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //  setValue(newValue);
  // };
  const [value, setValue] = useState();

  const handleChange = (event, links) => {
    setValue(links.index);
  };

  return (
    <Tabs
      value={value}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      textColor="yellow-500"
      aria-label="scrollable auto tabs example"
      className="h-16 w-screen bg-slate-950 text-yellow-500 p-3 mb-3 border-b-2 border-b-yellow-500"
    >
      {links.map((link, index) => (
        <LinkTab
          label={link.label}
          href={link.to}
          key={index}
          to={link.to}
          onClick={link.onClick}
          className={
            link.active ? "h-8 w-40 rounded-md border-yellow-500" : "h-8 w-40 "
          }
        />
      ))}
    </Tabs>
    /**<div className='h-16 w-screen overflow-hidden inline-flex p-3 mb-3 border-b-2 border-b-yellow-600 text-white bg-slate-900'>
        <div className='overflow-x-scroll min-w-full flex  flex-nowrap justify-between'>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              onClick={link.onClick}
              className={link.active ? 'h-8 w-40 rounded-md border-slate-950 bg-white text-slate-900' : 'h-8 w-40 rounded-md border-slate-950 text-white'}
            >
                        <h3 className='text-lg'>{link.label}</h3>
            </Link>
          ))}
        </div>
      </div>**/
  );
}
export default Homebar;
