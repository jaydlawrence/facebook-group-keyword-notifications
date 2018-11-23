# Facebook Group Keyword Notifications

Facebook used to have the ability to save any search in a group so that it would notify you if new posts came up that matched your search.
I miss that, so I wanted to try make a script that does that.

## Update: Dead in the water

I have encountered a massive blocker on this project.
Facebook's [Groups Api](https://developers.facebook.com/docs/groups-api) doesn't give you access (not even read access to your own groups) unless your app is reviewed and approved and your app is also installed by an admin on each of the groups you want to access.

The approval process is most likely impractical for such a small personal use app and I don't think I can convince the admins of the handful of groups that I want to monitor to let me install my app on their groups.

So for now, I am parking this project until I can find a better alternative.

I have a [Stack Overflow](https://stackoverflow.com/questions/53440169/facebook-group-api-read-only-workaround) question open on this, so if I get a workaround from that, I may reopen this project

## Installation

If despite the hopelessness of this project you want to download it and install it, here is what you need to do:

Clone the repo:

```
git clone git@github.com:jaydlawrence/facebook-group-keyword-notifications.git
```

Navigate to project directory

```
cd facebook-group-keyword-notifications
```

Make sure you have nodejs, yarn and nvm installed globally.

Select the correct version of node:

```
nvm use
```

Install the dependencies with yarn

```
yarn
```
Make a copy of the example config and populate it with your Facebook app credentials, group ids and keywords

```
cp config.example.js config.js
```

Run the script

```
yarn check-groups
```

If you have set it all up correctly, it should get you an access token and then break at the groups api request with something like:
```
(#10) To use 'Groups API', your use of this endpoint must be reviewed and approved by Facebook.
```