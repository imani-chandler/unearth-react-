import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { BIOS } from '../shared/bios';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bios: BIOS
        };
    }

    render() {
        const directory = this.state.bios.map(bio => {
            return (
                <div className='container'>
                    <div className='row row-content'>                 
                            <h2 className='my-5'>Unearth The Intro</h2>
                            <h5>A story where you can carve your own path! Unearth offers a branching storyline with multiple paths. You'll never experience the same story twice!</h5>
                        </div>                       
                        <h3 className='mt-5'>The Story</h3>                        
                        <Card>                   
                            <CardImg  src={bio.image} alt={bio.name} />
                            <CardImgOverlay>
                                <CardTitle>
                                    <p className='mb-5'>{bio.description}</p>  
                                </CardTitle> 
                            </CardImgOverlay>  
                        </Card>
                        <p><p class="d-none d-sm-block h5 mb-5">Hover over the image to get the full synopsis! After that, click the characters icon to get to know more about the four playable characters!</p></p>
                    </div>
                
            );
        });

        return (
            <div>
                <Header />
                <div className="container">                   
                    <div className="row">                      
                        {directory}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;