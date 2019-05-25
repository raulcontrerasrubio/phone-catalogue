FROM node:11.3.0-alpine

# set working directory
WORKDIR /server

# add `/app/node_modules/.bin` to $PATH
ENV PATH /server/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /server/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]