// run npm rebuild --runtime=electron --target=1.4.13 --disturl=https://atom.io/download/atom-shell --abi=54


const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow,Menu} = electron ; 
let mainWindow;

//Listen for app to be ready
app.on('ready', function(){
	
	//create new window
	mainWindow = new BrowserWindow({});	
	// load html file in the window
	mainWindow.loadURL(url.format({
    	pathname: path.join(__dirname, 'ia_result.html'),
    	protocol: 'file',
    	slashes: true
	}));


	//Build menu from template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	//Insert Menu
	Menu.setApplicationMenu(mainMenu);
});

//create menu

const mainMenuTemplate = [
{
	label:'File', 
	submenu:[
		{
			label:'Quit',
			accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
			click(){
				app.quit();
			}
		},
		
		{
			label: 'Reset'

		},


		{
			label: 'Add More Options'
		}
	]
}
];

// Add Developer Tools if not in production environment
if(process.env.NODE_ENV !== 'production'){
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu:[
		{
			label: 'Toggle Dev Tools',
			click(item, focusedWindow){
				focusedWindow.toggleDevTools();
			}
		}
		]
	});
}
