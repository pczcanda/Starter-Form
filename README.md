#Starter form

This is a starter form built using valid HTML5 and CSS3. 

It details a common set of requirements and considerations, including different input types, flexible markup and basic layout variations.

Built using a [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming convention, this example can easily convert to any other build setup.

##How it works

**Input types include the following:**

+ Text
+ Password
+ Tel
+ Email
+ Textarea
+ Select
+ Radio
+ Checkbox

**HTML markup:**

The following HTML details a general setup.

```html
<form>
	<div class="form" role="form">
	
		<fieldset>
			<legend>Sample legend</legend>
			
			<div class="form__row">
				<div class="form__desc-group">
					<div class="form__desc-item">
						<label for="sample">Label name</label>
					</div>
				</div>
				<div class="form__control-group">
					<div class="form__control-item">
						<span class="form__control-entry">
							<input type="text" id="sample" />
						</span>
					</div>
				</div>
			</div>
			
		</fieldset>
		
	</div>
</form>
```

**Inline form modifier**

An inline modifier can be used to alter the form layout. This modifier places desc-groups and control-groups side-by-side - which can be a common requirement. 

```html
<div class="form form--inline">
```

**Inline control modifier**

An inline modifier can also be applied to control groups and control items. This modifier places groups and/or items side-by-side. 

```html
<div class="form__control-group form__control-group--inline">
	<div class="form__control-item form__control-item--inline">
```

**Validation**

An error modifier can be applied to each required row for validation styling.

```html
<div class="form__row form__row--error">
```

**Entry additions**

Entry additions can be added for presentation or navigation. The placement of this can be configured using a left or right modifier, as shown in the example.

```html
<!-- Part of a form row -->
<div class="form__control-item">
	<span class="form__control-entry form__control-entry--icon-left">
		<input type="password" id="sample">
		<span class="form__control-icon form__control-icon--padlock"></span>
	</span>
</div>
```

##Custom radio and checkbox inputs

Custom radio and checkboxes have been included using [this tried and tested technique](http://lea.verou.me/2011/05/rule-filtering-based-on-specific-selectors-support/)

In addition, there is an optional JavaScript file which has a jQuery dependency. This sets classes on input focus and blur which is useful for highlighting on keyboard navigation.

##Browser Support

Tested using the following browsers/devices:

+ Latest desktop versions of Chrome, Firefox and Safari.
+ Internet Explorer 8 and above.
+ iOS 6.0, 6.1, 7.0 (Mobile Safari and Google Chrome)
+ Android 4.3, 4.4 (Google Chrome)

##Demo
[View demo](http://bryankerr.co.uk/examples/starter-form/)
