# ns-kitchen-sink

Kitchen Sink is a NativeScript app meant to cover usage and utilization of widgets included in the platform as well as working with different framework capabilities, like device interface or working with data from Telerik Platform.

## Getting Started

If you're using Visual Studio with the Telerik AppBuilder Extension, you're in luck!  Clone the repo and you've got a working VS project (this was created in VS Community 2015), so simply open the project in Visual Studio and you're ready to use the AppBuilder menu to build in the cloud or build and deploy to a local device.

If you're a command-line type person...

1. Ensure you have [NativeScript Command-line Interface](https://www.npmjs.com/package/nativescript) and (grunt-cli)[https://github.com/gruntjs/grunt-cli] installed as well as all the prerequisites for the NativeScript development.

2. Clone and install dependencies for this sample:
  ```
  git clone https://github.com/EvanHutnick/ns-kitchen-sink.git
  cd ns-kitchen-sink
  tns install
  ```

3. Copy platform specific resources
  
  Curretly we copy platform specific resources such as custom AndroidManifest.xml manually. 
  This will be solved with {N} 1.4+   
  
  ```
  cp -R install/android platforms/
  cp -R install/ios platforms/
  ```

You're all set to go!  
