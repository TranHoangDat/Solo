const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const helmet = require("helmet");
require('./util/oAuth2');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const projectRouter = require('./routes/project');
const sectionRouter = require('./routes/section');
const taskRouter = require('./routes/task');
const commentRouter = require('./routes/comment');
const activityRouter = require('./routes/activity');

const verifyToken = require('./middleware/auth');

require('dotenv').config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: process.env.URL_FRONT_END,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true,
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(helmet({ originAgentCluster: true }));
app.use(
  helmet.permittedCrossDomainPolicies({
    permittedPolicies: "all",
  })
);

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next(); 
})

app.use(cookieSession({
    name: 'todolist-session',
    keys: ['key1', 'key2']
  }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req, res) => res.send("Hello World"));
app.use('/api/auth', cors(),  authRouter);
app.use('/account', verifyToken, userRouter);
app.use('/project', verifyToken, projectRouter);
app.use('/section', verifyToken, sectionRouter);
app.use('/task', verifyToken, taskRouter);
app.use('/comment', verifyToken, commentRouter);
app.use('/activity',verifyToken, activityRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is started on port: ${PORT}`));