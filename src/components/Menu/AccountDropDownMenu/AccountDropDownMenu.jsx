import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react"
import React, { useCallback, useEffect } from "react"
import { MdOutlineAccountCircle } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import { signOut } from "store/slices/userSlice"

export default function AccountDropDownMenu({ email }) {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const user = useSelector((state) => state.user)

  const handleSignOut = useCallback(() => {
    dispatch(signOut())
  }, [dispatch])

  const handleRedirectAdminPage = useCallback(() => {
    if (user.isAdmin) {
      navigate(Routes.admin.path, { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    if (!user.isAdmin) {
      navigate(Routes.home.path, { replace: true })
    }
  }, [user, navigate])
  console

  return (
    <Menu>
      <HStack>
        <MenuButton>
          <Icon w="3rem" h="3rem" color="white" as={MdOutlineAccountCircle} />
        </MenuButton>
        <Text fontSize="lg" isTruncated color="white">
          {email}
        </Text>
      </HStack>

      <MenuList>
        {!user.isAdmin && (
          <MenuItem onClick={handleRedirectAdminPage}>
            Sign in as Admin
          </MenuItem>
        )}
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  )
}
