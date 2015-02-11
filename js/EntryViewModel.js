// Entrys ViewModel
(function (myApp) {
	// constructor function
	function EntryViewModel() {
		var self = this;
		// the entry that we want to view/edit
		self.selectedEntry = ko.observable();
		// the entry collection
		self.entryCollection = ko.observableArray([]);

		// creates a new Entry and sets it up
		// for editing
		self.addNewEntry = function () {
			// create a new instance of a Entry
			var p = new myApp.Entry();
			// set the selected Entry to our new instance
			self.selectedEntry(p);
		};
			
		// logic that is called whenever a user is done editing
		// a Entry or done adding a Entry
		self.doneEditingEntry = function () {
			// get a reference to our currently selected Entry
			var p = self.selectedEntry();

			//TODO: Add more validation!

			// ignore if it is null
			if (!p) {
				return;
			}
			// check to see that the Entry
			// doesn't already exist in our list
			if (self.EntryCollection.indexOf(p) > -1) {
				return;
			}
			// add the Entry to the collection
			self.entryCollection.push(p);
			// clear out the selected Entry
			self.selectedEntry(null);
		};

		// logic that removes the selected Entry
		// from the collection
		self.removeEntry = function () {
			// get a reference to our currently selected Entry
			var p = self.selectedEntry();
			// ignore if it is null
			if (!p) {
				return;
			}
			// empty the selectedEntry
			self.selectedEntry(null);
			// simply remove the item from the collection
			return self.EntryCollection.remove(p);
		};
	}
	// add our ViewModel to the public namespace
	myApp.EntryViewModel = EntryViewModel;
} (window.myApp));