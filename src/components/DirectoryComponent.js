import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyline: [
                {
                id: 0,
                name: 'Unearth The Story',
                image: 'assets/images/template.png',
                elevation: 177,
                description: 'In the not so distant future, the world has almost been completely run by a one-world government. Because of this the lives of many have been dictated by powers out of their own control. People have lost their own lives, careers, friends, associates, and even families. The only thing that keeps the people from revolting, is the false sense of security, hope, aide that this government provides. However there were a few people who had enough! Not everyone were easily succumb to this false pretense. In this story, a group of five individuals came together with very different backgrounds, skillsets, and motives. This is the story of the mercenary group they created, "Scarab". Their goal? Tear down the world and rebirth it into anew!'
                }
            ],
        };
    }

    render() {
        const directory = this.state.storyline.map(story => {
            return (
                <div>
                    <div>
                        <h2 className='my-5'>Unearth The Intro</h2>
                        <h5>A story where you can carve your own path! Unearth offers a branching storyline with multiple paths. You'll never experience the same story twice!</h5>
                    </div>
                    <div>
                    <img src={story.image} alt={story.name} width = "800" />
                    <h3>{story.name}</h3>
                    <p>{story.description}</p>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;