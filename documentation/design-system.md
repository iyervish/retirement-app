# Visual Assets & Layout Specifications

## Visual Strategy Framework

### Design Psychology for Retirement Planning
**Goal**: Transform anxiety into confidence through visual clarity
**Approach**: Clean, organized, forward-looking (not scary charts or stressed people)
**Emotion**: Calm optimism - "your future is manageable and bright"

### Visual Hierarchy Principles
1. **Reduce cognitive load**: One clear focal point per section
2. **Build progressive trust**: Simple → detailed as you scroll
3. **Show, don't just tell**: Visual proof of capabilities
4. **Future-focused imagery**: Growth, progress, achievement (not current stress)

## Hero Section Visual Assets

### Primary Hero Graphic Options

**Option 1: Timeline Visualization**
- **Concept**: Horizontal timeline showing "You are here" to "Retirement"
- **Elements**: 
  - Clean line with milestone markers
  - Current age marker (dynamic based on user input)
  - Retirement date highlighted with subtle glow
  - Savings milestones as smaller dots along timeline
- **Style**: Minimal line art, Forest Green and Gold accent colors
- **Mood**: Progress and clarity

**Option 2: Growth Curve Visualization**
- **Concept**: Ascending savings curve reaching retirement goal
- **Elements**:
  - Smooth curve showing savings growth over time
  - Retirement target as peak/endpoint
  - Current position marked clearly
  - Subtle grid background for context
- **Style**: Clean data visualization, not overwhelming
- **Mood**: Upward momentum and achievement

**Option 3: Calendar Concept**
- **Concept**: Calendar pages flipping to future retirement date
- **Elements**:
  - Stylized calendar with retirement date circled/highlighted
  - Subtle animation of pages turning (if animated)
  - Clean, modern calendar design
- **Style**: Isometric or flat illustration
- **Mood**: Specific and achievable

### Hero Visual Requirements
**Technical Specs**:
- **Dimensions**: 600px wide × 400px tall (desktop)
- **Format**: SVG for scalability, or high-res PNG with WebP fallback
- **Color palette**: Primary Forest Green, Gold accents, Gray neutrals
- **Background**: Transparent or subtle gradient
- **Mobile adaptation**: Stack below text, reduce to 350px wide

**Cursor Prompt for Hero Visual**:
"Create a clean timeline visualization showing progression from 'current age' to 'retirement date' with milestone markers, using Forest Green (#1B4332) and Gold (#FFB627) colors, SVG format, 600px wide"

## Section Icons & Graphics

### Required Icon Set
**Style Guide**: 
- **Type**: Outline/stroke icons (not filled)
- **Stroke width**: 1.5px consistently
- **Size**: 32px standard (scale to 24px/40px as needed)
- **Color**: Forest Green 700 or inherit from parent

**Calculator Icon** (Planning Tools)
- **Use**: Main feature - retirement calculation
- **Style**: Clean calculator with basic math symbols
- **Context**: "Input your numbers, get your date"

**TrendingUp Icon** (Savings Growth)
- **Use**: Optimization features
- **Style**: Arrow ascending along curve/steps
- **Context**: "See how to accelerate your timeline"

**Calendar Icon** (Timeline Clarity)
- **Use**: Timeline and milestone tracking
- **Style**: Calendar grid with one date highlighted
- **Context**: "Track progress over time"

**Shield Icon** (Security/Protection)  
- **Use**: Financial security messaging
- **Style**: Simple shield outline
- **Context**: "Protect your future"

**Target Icon** (Goal Achievement)
- **Use**: Reaching retirement goals
- **Style**: Bullseye with arrow in center
- **Context**: "Hit your retirement target"

**CheckCircle Icon** (Completion/Success)
- **Use**: Completed milestones, success states
- **Style**: Circle with checkmark
- **Context**: "On track" indicators

### Supporting Graphics

**Feature Section Illustrations**
- **Style**: Simple, geometric, consistent with hero
- **Purpose**: Support text without overwhelming
- **Examples**:
  - Ascending bar chart for "optimize your path"
  - Progress circles for "track your progress"
  - Pathway/roadmap visual for "clear next steps"

**Background Elements**
- **Subtle geometric patterns**: Dots, lines, or grid overlays
- **Gradient overlays**: Very subtle, Forest Green to Gold
- **Section dividers**: Clean lines or subtle shadows
- **Usage**: Add visual interest without distraction

## Layout Architecture

### Grid System Specifications

**Desktop Layout (1200px max width)**:
- **12-column grid** with 32px gutters
- **Content margins**: 40px on each side
- **Section padding**: 64px top/bottom minimum

**Tablet Layout (768px - 1024px)**:
- **8-column grid** with 24px gutters  
- **Content margins**: 32px on each side
- **Section padding**: 48px top/bottom

**Mobile Layout (< 768px)**:
- **Single column** layout
- **Content margins**: 24px on each side
- **Section padding**: 32px top/bottom

### Section Layout Templates

#### Template 1: Hero Section Layout
```
[Full-width container, 1200px max]

[Left Column - 60% width]          [Right Column - 40% width]
- Logo/Navigation (top)            [Hero visualization]
- Headline (Hero typography)       [Timeline/growth chart]
- Subheading (Body Large)         [Clean, minimal styling]
- CTA Button (Primary style)      [Responsive scaling]

[Spacing: 96px padding top/bottom]
```

**Mobile Transformation**:
- Stack to single column
- Text content first, visual below
- Reduce headline size
- Maintain button prominence

#### Template 2: Feature Grid Layout
```
[Section Header - Centered]
Headline + optional subheading

[3-Column Grid - Equal width]
[Icon]              [Icon]              [Icon]
Feature 1           Feature 2           Feature 3
Headline            Headline            Headline
Description         Description         Description

[Spacing: 64px section padding, 32px between cards]
```

**Responsive Behavior**:
- Desktop: 3 columns side-by-side
- Tablet: 2 columns, third drops below
- Mobile: Single column stack

#### Template 3: Social Proof Layout
```
[Section with background color - Gray 100]

[Centered Content]
"Testimonial quote text in larger typography"
- Attribution name and context

[Or alternatively]
[Logo grid of data sources/partners]
3-4 logos, equally spaced, muted colors

[Spacing: 48px section padding]
```

#### Template 4: FAQ/Questions Layout
```
[Two-column layout]

[Left Column - 40%]        [Right Column - 60%]
Section headline           Q: Question text
Brief intro text          A: Answer in conversational tone
                          
                          Q: Next question
                          A: Next answer
                          
                          [Continues pattern]
```

**Mobile**: Stack to single column, questions/answers in accordion format

### Navigation Layout

**Desktop Navigation**:
- **Logo**: Left-aligned, 32px height
- **Menu items**: Right-aligned, 4-5 items max
- **CTA button**: Prominent, separate from menu
- **Background**: Transparent over hero, white on scroll

**Mobile Navigation**:
- **Logo**: Left-aligned, smaller (24px height)
- **Hamburger menu**: Right-aligned
- **CTA**: Inline with navigation or prominent below

### Footer Layout

**Minimal Footer Approach** (following Stripe's pattern):
- **Single row**: Legal links only
- **Center-aligned**: Copyright, Privacy, Terms
- **Background**: Gray 100 or White
- **Height**: 64px total

## Visual Asset Creation Specifications

### Hero Visual Creation Brief
**For designer/Cursor prompt**:
"Create a retirement timeline visualization showing:
- Horizontal timeline from current age (35) to retirement (65)
- Clean line design with milestone markers
- Current position marked with 'You are here'
- Retirement date highlighted with gold accent
- Savings milestones as smaller dots
- Modern, minimal style using Forest Green (#1B4332) and Gold (#FFB627)
- SVG format, 600×400px, transparent background"

### Icon Creation Brief
**For icon set/Cursor prompt**:
"Create 6 outline icons in consistent style:
- Calculator, TrendingUp chart, Calendar, Shield, Target, CheckCircle
- 1.5px stroke width, 32px artboard
- Simple, clean design
- SVG format with Forest Green (#1B4332) color
- Professional but approachable feel"

### Background Pattern Options
1. **Subtle dot grid**: 20px spacing, 2px dots, 10% opacity
2. **Gentle gradient**: Forest Green to Gold, 3% opacity overlay
3. **Geometric lines**: Diagonal lines, very subtle, section dividers only

## Implementation Priority Order

### Phase 1: Essential Assets
1. **Hero visualization** (timeline or growth chart)
2. **Primary icon set** (6 core icons)
3. **Logo/wordmark** (if not existing)

### Phase 2: Supporting Assets  
1. **Feature illustrations** (simple geometric)
2. **Background patterns** (subtle enhancement)
3. **Additional icons** (nice-to-have)

### Phase 3: Polish Assets
1. **Animated versions** (subtle hover/scroll effects)
2. **Alternative hero graphics** (A/B testing)
3. **Seasonal variations** (if applicable)

## Cursor Implementation Prompts

### For Hero Section
"Create a hero section with 60/40 split layout, left column contains headline 'Know exactly when you can retire' in 56px Inter bold, subheading in 18px, and primary CTA button. Right column has timeline visualization. Use Forest Green (#1B4332) and Gold (#FFB627) color scheme, 1200px max width, responsive design."

### For Feature Grid
"Create a 3-column feature grid with icons, headlines, and descriptions. Each card has 32px icon, 24px headline, 16px description text. Cards have subtle borders and hover effects. Responsive to single column on mobile. Use established spacing system with 32px gaps."

### For Visual Assets
"Generate clean SVG timeline showing progression from age 35 to retirement at 65, with milestone markers and current position indicator. Use Forest Green primary color with Gold accent for retirement endpoint. Modern, minimal design style, 600px wide."

This visual framework ensures every graphic element serves the core goal: making retirement planning feel manageable and achievable rather than overwhelming or scary.