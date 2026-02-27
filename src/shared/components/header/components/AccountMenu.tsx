import { Menu, MenuItem } from "@mui/material"

interface AccountMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const AccountMenu = ({ anchorEl, onClose }: AccountMenuProps) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      id="account-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MenuItem onClick={onClose}>
        {("Perfil")}
      </MenuItem>

      <MenuItem
        onClick={async () => {
          onClose();
          // await authController.logout();
        }}
      >
        {("Logout")}
      </MenuItem>
    </Menu>
  )
}
