import React, { useState } from "react";
import { Avatar, Divider, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { TfiBookmark, TfiMenu } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { FaPen, FaPlus, FaRandom } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { LuBan, LuMessagesSquare } from "react-icons/lu";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiSecretBook } from "react-icons/gi";
import {MdLibraryBooks} from 'react-icons/md'
import {
  BsFillBellFill,
  BsFillBookmarkFill,
  BsFillPeopleFill,
  BsFillPersonFill,
  BsFillQuestionCircleFill,
  BsPersonFillX,
} from "react-icons/bs";
import ModalSearch from "../modals/ModalSearch";
const Header = ({ toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const headerStyle = {
    backgroundColor:
      theme.palette.type === "dark" ? "#1c1c1e" : theme.palette.primary.main,
    color: theme.palette.text.primary,
  };

  const menuBgColor = {
    background: theme.palette.type === "dark" ? "#1c1c1e" : "#FFFFFF",
    colorIcons: theme.palette.type === "light" ? "#000" : "#FFFFFF",
    colorText: theme.palette.type === "light" ? "#000" : "#FFFFFF",
  };
  const user = true;
  const [katalogMenu, setKatalogMenu] = useState(null);
  const openMenu = Boolean(katalogMenu);
  const handleClickKatalogMenu = (event) => {
    setKatalogMenu(event.currentTarget);
  };
  const handleCloseKatalogMenu = () => {
    setKatalogMenu(null);
  };
  const [otherMenu, setOtherMenu] = useState(null);
  const openOtherMenu = Boolean(otherMenu);
  const handleClickOtherMenu = (event) => {
    setOtherMenu(event.currentTarget);
  };
  const handleCloseOtherMenu = () => {
    setOtherMenu(null);
  };
  const [showModal, setShowModal] = useState(false);

  const [createPost, setCreatePost] = useState(null);
  const openCreatePostMenu = Boolean(createPost);
  const handleClickCreatePostMenu = (event) => {
    setCreatePost(event.currentTarget);
  };
  const handleCloseCreatePostMenu = () => {
    setCreatePost(null);
  };
  return (
    <header style={headerStyle}>
      <div className="flex flex-row w-[1200px] m-auto justify-between items-center">
        <Link to="/">
          <img className="w-[152px]" src="/assets/manga.png" alt="manga" />
        </Link>
        <div className="flex flex-row gap-[30px]">
          <button
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClickKatalogMenu}
            className="text-[17px] font-bold flex flex-row items-center gap-[5px]"
          >
            <TfiMenu className="w-[12px]" />
            Каталог
          </button>
          <Menu
            anchorEl={katalogMenu}
            open={openMenu}
            onClose={handleCloseKatalogMenu}
            PaperProps={{
              style: {
                backgroundColor: menuBgColor.background,
              },
            }}
          >
            <MenuItem onClick={handleCloseKatalogMenu}>
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Манги
              </span>
            </MenuItem>
            <MenuItem onClick={handleCloseKatalogMenu}>
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Манхвы
              </span>
            </MenuItem>
            <MenuItem onClick={handleCloseKatalogMenu}>
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Маньхуа
              </span>
            </MenuItem>
            <MenuItem onClick={handleCloseKatalogMenu}>
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                OEL-манги
              </span>
            </MenuItem>
            <MenuItem onClick={handleCloseKatalogMenu}>
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Руманга
              </span>
            </MenuItem>
            <MenuItem onClick={handleCloseKatalogMenu}>
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Комикс западный
              </span>
            </MenuItem>
            <MenuItem onClick={handleCloseKatalogMenu}>
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Синглов
              </span>
            </MenuItem>
          </Menu>
          <button
            onClick={() => setShowModal(true)}
            className="text-[17px] font-bold flex flex-row gap-[5px] items-center"
          >
            <BiSearch className="w-[15px]" /> Поиск
          </button>
          <ModalSearch onClose={() => setShowModal(false)} isOpen={showModal} />
          <Link to="/sociallib">
            <button className="text-[17px] font-bold flex flex-row gap-[5px] items-center">
              <LuMessagesSquare className="w-[15px]" /> Форум
            </button>
          </Link>
          <button className="text-[17px] font-bold flex flex-row gap-[5px] items-center">
            <BsFillQuestionCircleFill className="w-[12px]" /> FAQ
          </button>
          <button
            aria-controls={openOtherMenu ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openOtherMenu ? "true" : undefined}
            onClick={handleClickOtherMenu}
            className="text-[17px] font-bold flex flex-row gap-[5px] items-center"
          >
            ...
          </button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={otherMenu}
            open={openOtherMenu}
            onClose={handleCloseOtherMenu}
            PaperProps={{
              style: {
                backgroundColor: menuBgColor.background,
              },
            }}
          >
            <MenuItem
              onClick={handleCloseOtherMenu}
              className="text-[17px] font-bold flex flex-row gap-[5px] items-center"
            >
              <FaRegNewspaper
                style={{
                  color: menuBgColor.colorIcons,
                }}
              />
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Новости
              </span>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              otherMenu
              className="text-[17px] font-bold flex flex-row gap-[5px] items-center"
            >
              <AiOutlineMail
                style={{
                  color: menuBgColor.colorIcons,
                }}
              />
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Контакты
              </span>
            </MenuItem>
            <MenuItem
              onClick={handleCloseOtherMenu}
              className="text-[17px] font-bold flex flex-row gap-[5px] items-center"
            >
              <FaRandom
                style={{
                  color: menuBgColor.colorIcons,
                }}
              />
              <span
                style={{
                  color: menuBgColor.colorText,
                }}
              >
                Рандом
              </span>
            </MenuItem>
          </Menu>
        </div>
        <div className="flex flex-row gap-[10px]">
          {user ? (
            <div className="flex flex-row gap-[5px]">
              <IconButton
                id="fade-button"
                aria-controls={openCreatePostMenu ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openCreatePostMenu ? "true" : undefined}
                onClick={handleClickCreatePostMenu}
              >
                <FaPen className="w-[18px]" style={headerStyle} />
              </IconButton>
              <Menu
                PaperProps={{
                  style: {
                    backgroundColor: menuBgColor.background,
                  },
                }}
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={createPost}
                open={openCreatePostMenu}
                onClose={handleCloseCreatePostMenu}
              >
                <MenuItem
                  onClick={handleCloseCreatePostMenu}
                  className="flex flex-row gap-[7px]"
                >
                  <FaPlus style={{ color: menuBgColor.colorIcons }} />
                  <span style={{ color: menuBgColor.colorText }}>
                    Добавить тайтл
                  </span>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCreatePostMenu}
                  className="flex flex-row gap-[7px]"
                >
                  <FaPeopleGroup style={{ color: menuBgColor.colorIcons }} />
                  <span style={{ color: menuBgColor.colorText }}>
                    Добавить команду
                  </span>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCreatePostMenu}
                  className="flex flex-row gap-[7px]"
                >
                  <GiSecretBook style={{ color: menuBgColor.colorIcons }} />
                  <span style={{ color: menuBgColor.colorText }}>
                    Добавить автора
                  </span>
                </MenuItem>
                <Divider style={{color: menuBgColor.colorText}} sx={{ my: 0.5 }} />
                <MenuItem
                  onClick={handleCloseCreatePostMenu}
                  className="flex flex-row gap-[7px]"
                >
                  <MdLibraryBooks style={{ color: menuBgColor.colorIcons }} />
                  <span style={{ color: menuBgColor.colorText }}>
                    Мои добавления
                  </span>
                </MenuItem>
              </Menu>
              <IconButton>
                <IoIosNotifications style={headerStyle} />
              </IconButton>
              <Link to="/favorites">
                <IconButton>
                  <TfiBookmark className="w-[20px]" style={headerStyle} />
                </IconButton>
              </Link>
              <></>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32, backgroundColor: "inherit" }}
                  variant="rounded"
                >
                  <img
                    src="https://mangalib.me/uploads/users/6406248/3LKqrwEnfDOA.jpg"
                    alt="avatar"
                  />
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    backgroundColor: menuBgColor.background,
                    color: menuBgColor.colorText,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  className="flex flex-row gap-[7px]"
                  onClick={handleClose}
                >
                  <BsFillPersonFill />
                  <span style={{ color: menuBgColor.colorText }}>
                    Профиль пользователя
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px]"
                  onClick={handleClose}
                >
                  <BsFillBookmarkFill />
                  <span style={{ color: menuBgColor.colorText }}>
                    Мои избранные
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px]"
                  onClick={handleClose}
                >
                  <BsFillBellFill />
                  <span style={{ color: menuBgColor.colorText }}>
                    Мои уведомления
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px]"
                  onClick={handleClose}
                >
                  <BiSolidMessageRounded />
                  <span style={{ color: menuBgColor.colorText }}>
                    Мои комментарии
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px]"
                  onClick={handleClose}
                >
                  <MdEmail />
                  <span style={{ color: menuBgColor.colorText }}>
                    Личные сообщения
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px]"
                  onClick={handleClose}
                >
                  <BsFillPeopleFill />
                  <span style={{ color: menuBgColor.colorText }}>
                    Список друзей
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px]"
                  onClick={handleClose}
                >
                  <LuBan />
                  <span style={{ color: menuBgColor.colorText }}>
                    История банов
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px] pb-[10px]"
                  style={{
                    paddingBottom: `10px`,
                    borderBottom: `2px solid #e5e5e5`,
                  }}
                  onClick={handleClose}
                >
                  <BsPersonFillX />
                  <span style={{ color: menuBgColor.colorText }}>
                    Игнор лист
                  </span>
                </MenuItem>
                <MenuItem
                  className="flex flex-row gap-[7px] pb-[10px]"
                  onClick={handleClose}
                >
                  <span style={{ color: menuBgColor.colorText }}>
                    Настройки
                  </span>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="flex flex-row gap-[10px] items-center">
              <Link to="/loginuser">
                <button className="p-[2px] w-[56px] rounded">Вход</button>
              </Link>
              <Link to="/signup">
                <button className="border border-[#fff] p-[2px] w-[111px] rounded">
                  Регистрация
                </button>
              </Link>
            </div>
          )}
          <IconButton style={headerStyle} onClick={toggleDarkMode}>
            {theme.palette.type === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
