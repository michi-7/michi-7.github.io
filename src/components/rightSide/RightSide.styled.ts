import { styled } from '@mui/material/styles'

export const RightContainer = styled('div')(({ theme }) => ({
	padding: theme.spacing(4),
	color: theme.palette.contrastText,
	borderTopRightRadius: theme.shape.borderRadius,
	borderBottomRightRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.contrastBackground,
}))