import React, {Component} from 'react';
import factory from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component{
	//exclusive function to Next.js
	static async getInitialProps(){
		const campaigns = await factory.methods.getDeployedCampaigns().call();

		return {campaigns: campaigns};		
	}

	renderCampaigns(){
		const items = this.props.campaigns.map(address => {
			return{
				header: address,
				description: (
				   <Link route={`/campaigns/${address}`}>
					<a>View Campaigns</a>
					</Link>
				),
				fluid: true
			};
		});

		return <Card.Group items={items} />;
	}
//next.js does not support css so this is why we must include the link tag to the stylesheet
	//place the link tag inside of the react component
	render(){
		return (
			<Layout>
				<div>
					<h3>Open Campaigns</h3>

					<Link route="/campaigns/new">
					 <a>
					   <Button 
						 floated="right"
						 content="Create Campaign"
						 icon="add circle"
						 primary
						/>
					 </a>
					</Link>
					{this.renderCampaigns()}
				</div>
			</Layout>
			);
	}
}

export default CampaignIndex;