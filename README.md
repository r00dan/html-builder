# html-builder

### Documentation
Global variable `window.hb`.
| Method | Description |
| ------ | ------ |
| `Create(string)` | Create HTML element. |
| `Find(string)` | Find HTML element. |
| `AddClassName(string)` | Add a bunch of css classes to HTML element. |
| `AddId(string)` | Add an id to HTML element. |
| `AppendChilds(...childs)` | Append a bunch of HTML elements. |
| `Fill(data)` | Fill HTML element with some text. |
| `SetSrc(url)` | Set src attribute to `HTMLImageElement`. |
| `SetSize(w, h)` | Set width and height to `HTMLImageElement`. |
| `AddEventListener(eventType, callback)` | Add event listener and returns `HTMLElement`. |
| `RemoveClassName(className)` | Remove css class and returns `HTMLElement`. |