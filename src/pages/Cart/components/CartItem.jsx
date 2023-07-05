import { Box, Container, Grid, Input, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { STATIC_HOST, THUMNAIL_PLACEHOLDER } from 'constants';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils';
import { removeFromCart } from '../cartSlice';
import { cartItemCountSelector } from '../selector';

const useStyles = makeStyles({
  root: {},
  cartTotal: {
    color: '#706d6d',
    fontSize: '14px',
  },
  image: {
    margin: 'auto 20px',
    width: '120px',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  contentLeft: {
    width: '70%',
    padding: '27px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '.25s ease',
    '&:hover': {
      color: '#0760b9',
    },
  },
  contentRight: {
    margin: 'auto 0',
    textAlign: 'right',
  },
  btnRemove: {
    color: '#0760b9',
    cursor: 'pointer',
  },
  salePrice: {
    fontSize: '20px !important',
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#8c8888',
  },
  box: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    border: '1px solid rgb(200, 200, 200)',
    borderRadius: '3px',
  },
  boxBtn: {
    borderRight: '1px solid rgb(200, 200, 200)',
    color: 'rgb(153, 153, 153)',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  boxInput: {
    outline: 0,
    border: 0,
    borderRight: '1px solid rgb(200, 200, 200)',
    width: '40px',
    height: '40px',
    textAlign: 'center',
    padding: '0 5px',
    display: 'flex',
    justifyContent: 'center',
    '&&::before': {
      borderBottom: 'none !important',
    },
    '& > input': {
      fontSize: '17px',
      fontWeight: 'bold',
      textAlign: 'center',
      // '&&::after': {
      //   borderBottom: 'none !important',
      // },
    },
  },
});

CartItem.propTypes = {
  cartItems: PropTypes.array,
};

function CartItem({ cartItems = [] }) {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartItemCount = useSelector(cartItemCountSelector);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleRemoveClick = (id) => {
    dispatch(removeFromCart(id));
  };

  const classes = useStyles();

  if (Object.keys(cartItems).length === 0) {
    return (
      <Box>
        <Container sx={{ textAlign: 'center', fontWeight: 'bold', mt: 10, fontSize: '24px' }}>
          Chưa có sản phẩm nào trong giỏ hàng
        </Container>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Container>
        <Typography>
          GIỎ HÀNG <span className={classes.cartTotal}>({cartItemCount} sản phẩm)</span>
        </Typography>
        <Paper elevation={1}>
          {cartItems.map((item, index) => (
            <Grid container sx={{ padding: '10px 0' }} key={index}>
              <Grid item>
                <img
                  className={classes.image}
                  src={item.product.thumbnail ? `${STATIC_HOST}${item.product.thumbnail?.url}` : THUMNAIL_PLACEHOLDER}
                  alt="images"
                  onClick={handleClick.bind(null, item.product.id)}
                />
              </Grid>
              <Grid item className={classes.content}>
                <Box className={classes.contentLeft}>
                  <Typography variant="h5" className={classes.name} onClick={handleClick.bind(null, item.product.id)}>
                    {item.product.name}
                  </Typography>
                  <Typography className={classes.btnRemove} onClick={handleRemoveClick.bind(null, item.id)}>
                    Xóa
                  </Typography>
                </Box>
                <Box className={classes.contentRight}>
                  <Typography variant="body1" className={classes.salePrice}>
                    {formatPrice(item.product.salePrice)}
                  </Typography>
                  {item.product.promotionPercent > 0 ? (
                    <Box display="flex">
                      <Typography variant="body2" className={classes.originalPrice}>
                        {formatPrice(item.product.originalPrice)}
                      </Typography>
                      <Typography>&nbsp; | &nbsp;</Typography>
                      <Typography variant="subtitle2">-{item.product.promotionPercent}%</Typography>
                    </Box>
                  ) : null}
                </Box>
              </Grid>
              <Grid item sx={{ margin: 'auto 20px' }}>
                <Box className={classes.box}>
                  <Typography className={classes.boxBtn}>-</Typography>
                  <Input
                    className={classes.boxInput}
                    // sx={{input: {textAlign: 'center'}}}
                    type="tel"
                    value={value === 0 ? item.quantity : value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <Typography className={classes.boxBtn} style={{ borderRight: '0' }}>
                    +
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}

export default CartItem;
