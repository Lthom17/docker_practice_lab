import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';

function Products() {

    return (
        <>
            <h1>
                Products Page
            </h1>
            <MDBRow>
                <MDBCol sm='6'>
                    <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Red Lipstick</MDBCardTitle>
                        <MDBCardImage position='top' src='https://m.media-amazon.com/images/I/711ksyUlqfL._SL1500_.jpg' />
                        <MDBCardText>
                        With hyaluronic acid and vitamin E, this emollient-rich lipstick glides luxuriously onto lips and hydrates instantly and over time.
                        </MDBCardText>
                        <MDBCardText>
                            $44.99
                        </MDBCardText>
                        <MDBBtn href='#'>Add to cart</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6'>
                    <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Brown Eyeshadow Palette</MDBCardTitle>
                        <MDBCardImage position='top' src='https://cafe24img.poxo.com/beautyboxkorea/web/product/big/201908/3a288aaf6a5aed57d7e43b40e6f997db.jpg' />
                        <MDBCardText>
                        An artist-curated collection of eye shadow palettes, each featuring five universally flattering shades in stunning finishes to customize any look.
                        </MDBCardText>
                        <MDBCardText>
                            $84.99
                        </MDBCardText>
                        <MDBBtn href='#'>Add to cart</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
        </>
    );
}

export default Products;