# Cursor Implementation Strategy & Prompts

## Implementation Roadmap

### Phase 1: Foundation Setup (30-45 minutes)
**Goal**: Establish design system and basic structure
**Output**: CSS custom properties, basic HTML structure, typography working

### Phase 2: Hero Section (60-90 minutes)  
**Goal**: Perfect the first impression - layout, content, visual
**Output**: Complete hero section with timeline graphic, responsive

### Phase 3: Core Sections (2-3 hours)
**Goal**: Build out feature grid, social proof, FAQ sections
**Output**: Complete landing page with all major sections

### Phase 4: Polish & Optimization (1-2 hours)
**Goal**: Animations, mobile refinement, performance optimization
**Output**: Production-ready landing page

## Phase 1: Foundation Setup

### Step 1.1: Project Structure
**Cursor Prompt**:
```
Create a modern HTML5 landing page structure for a retirement planning service. Include:
- Semantic HTML structure with header, main, sections, footer
- CSS reset and normalize
- Meta tags for responsive design and SEO
- Google Fonts link for Inter font family (weights 400, 500, 600, 700)
- Basic folder structure with assets/css/js folders
```

### Step 1.2: Design System CSS
**Cursor Prompt**:
```
Create CSS custom properties for a design system with:

Colors:
- Primary forest green family: #0D2818 (900), #1B4332 (700), #2D5A42 (500), #52A068 (300), #D8F3DC (100)
- Gold accent family: #B8860B (700), #FFB627 (500), #FFD23F (300), #FFF8DC (100)
- Gray scale: #212529 (900), #495057 (700), #6C757D (500), #CED4DA (300), #F8F9FA (100), #FFFFFF

Typography scale:
- Hero: 56px/1.1, weight 700 (40px on mobile)
- H1: 40px/1.2, weight 600 (32px on mobile)
- H2: 28px/1.25, weight 600 (24px on mobile)
- H3: 20px/1.3, weight 500
- Body Large: 18px/1.6, weight 400
- Body: 16px/1.6, weight 400
- Small: 14px/1.5, weight 400

Spacing scale based on 8px grid:
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

Include responsive breakpoints: mobile 768px, tablet 1024px, desktop 1200px max-width
```

### Step 1.3: Component Base Styles
**Cursor Prompt**:
```
Create base component styles using the established design system:

Button styles:
- Primary: Forest Green 700 background, white text, 14px vertical/32px horizontal padding, 8px border radius, hover state with Forest Green 500
- Secondary: Transparent background, Forest Green 700 border and text, same padding, hover with Forest Green 100 background
- Accent: Gold 500 background, dark gray text, same padding, hover with Gold 300

Card styles:
- Feature cards: White background, 1px Gray 300 border, 12px border radius, 32px padding (24px mobile), subtle shadow, hover lift effect
- Content cards: Gray 100 background, no border, 8px border radius, 24px padding

Form elements:
- Inputs: 1px Gray 300 border, 6px border radius, 12px vertical/16px horizontal padding, focus state with Gold 500 border

Include smooth transitions (200-300ms ease-out) for all interactive elements
```

## Phase 2: Hero Section Implementation

### Step 2.1: Hero Layout Structure
**Cursor Prompt**:
```
Create a hero section with:
- Full-width container with 1200px max-width, centered
- Two-column layout: 60% text column, 40% visual column
- Text column contains: navigation, headline, subheading, CTA button
- Visual column placeholder for timeline graphic
- 96px padding top/bottom
- Responsive: stack to single column on mobile with text first
- Navigation: logo left, minimal menu right, transparent background

Use semantic HTML structure and CSS Grid for layout
```

### Step 2.2: Hero Content Implementation  
**Cursor Prompt**:
```
Add content to the hero section:

Navigation:
- Logo/brand name "RetireWise" (placeholder, styled with primary color)
- Menu items: "How it Works", "Pricing", "About" 
- CTA button: "Get Started"

Hero text content:
- Headline: "Know exactly when you can retire" (use hero typography scale)
- Subheading: "Get a personalized retirement timeline based on your current savings, income, and goals. No generic advice, no scary surprises - just clear answers about your future." (use body large typography)
- Primary CTA: "See My Retirement Date" (use primary button style)

Apply proper spacing using design system variables
```

### Step 2.3: Hero Visual Asset
**Cursor Prompt**:
```
Create an inline SVG timeline visualization for the hero section:
- Horizontal timeline showing progression from age 35 to retirement at 65
- Clean line design with milestone markers at 5-year intervals
- Current position marked with "You are here" label and indicator
- Retirement endpoint highlighted with gold accent color and emphasis
- Small milestone dots for savings targets along the timeline
- Use Forest Green (#1B4332) for main timeline, Gold (#FFB627) for retirement highlight
- 500px wide, 300px tall, responsive scaling
- Modern, minimal aesthetic matching the clean design system
```

### Step 2.4: Hero Responsive Refinement
**Cursor Prompt**:
```
Refine the hero section for mobile responsiveness:
- Stack layout to single column below 768px breakpoint
- Reduce headline size to mobile typography scale
- Adjust timeline SVG to fit mobile width (350px max)
- Ensure CTA button remains prominent on mobile
- Test spacing and readability on small screens
- Maintain visual hierarchy and impact
```

## Phase 3: Core Sections Implementation

### Step 3.1: Feature Grid Section
**Cursor Prompt**:
```
Create a features section with:
- Section headline: "Everything you need to plan with confidence"
- 3-column grid layout (responsive to single column on mobile)
- Each feature card contains: icon placeholder, headline, description text
- Cards use established card styling with hover effects

Feature content:
1. Icon: Calculator | Headline: "Get your exact date" | Description: "Input your real numbers and get a personalized retirement timeline. No generic estimates."
2. Icon: TrendingUp | Headline: "Optimize your path" | Description: "See exactly how small changes to savings or timeline affect your retirement date."
3. Icon: Calendar | Headline: "Track your progress" | Description: "Stay on course with regular check-ins as your situation changes over time."

Use 64px section padding and proper spacing between cards
```

### Step 3.2: Icon Implementation
**Cursor Prompt**:
```
Create three inline SVG icons for the feature cards:

Calculator icon:
- Outline style with 1.5px stroke width
- 32px viewBox, clean calculator design
- Use Forest Green (#1B4332) stroke color

TrendingUp icon:
- Outline style with 1.5px stroke width  
- 32px viewBox, ascending arrow/chart design
- Use Forest Green (#1B4332) stroke color

Calendar icon:
- Outline style with 1.5px stroke width
- 32px viewBox, calendar grid with highlighted date
- Use Forest Green (#1B4332) stroke color

All icons should be modern, minimal, and consistent in style
```

### Step 3.3: Social Proof Section
**Cursor Prompt**:
```
Create a social proof section with:
- Light gray background (Gray 100)
- Centered layout with testimonial format
- Large quote text: "I found out I could retire 3 years earlier than I thought. The recommendations were so simple but made a huge difference."
- Attribution: "Sarah M., Teacher, Age 42"
- Alternative: Simple text stating "Based on Bureau of Labor Statistics data and 10,000+ retirement calculations"
- 48px section padding, proper typography hierarchy
```

### Step 3.4: FAQ Section
**Cursor Prompt**:
```
Create an FAQ section with:
- Two-column layout: intro text left (40%), Q&A right (60%)
- Left column: "Common questions" headline and brief intro
- Right column: 4-5 question/answer pairs in clean format

Sample Q&A content:
Q: "How accurate can this really be?"
A: "We use your actual savings, income, and spending data - not generic assumptions. Most people find our timelines within 6 months of reality."

Q: "What if I'm behind on savings?"
A: "That's exactly why you need to know where you stand. We'll show you specific steps to get back on track."

Q: "Is this just another generic calculator?"
A: "Nope. We account for your real situation: salary growth, Social Security, healthcare costs, and lifestyle goals."

Mobile: stack to single column with accordion-style Q&A
```

### Step 3.5: Final CTA Section
**Cursor Prompt**:
```
Create a final call-to-action section with:
- Centered layout on colored background (Forest Green 100)
- Headline: "Ready to know when you can retire?"
- Subtext: "Get your personalized timeline in less than 5 minutes"
- Primary CTA button: "Calculate My Retirement Date"
- Secondary option: "See how it works" (link style)
- 64px section padding, proper contrast for accessibility
```

## Phase 4: Polish & Optimization

### Step 4.1: Animation Implementation
**Cursor Prompt**:
```
Add subtle animations and interactions:
- Smooth scroll behavior for anchor links
- Fade-in animations for sections as they enter viewport (using Intersection Observer)
- Hover effects for cards: 2px lift with shadow increase
- Button hover states with smooth color transitions
- Timeline graphic: subtle animation for "current position" indicator
- All animations respect prefers-reduced-motion setting
- Duration: 200-300ms with ease-out easing
```

### Step 4.2: Mobile Optimization
**Cursor Prompt**:
```
Optimize the entire page for mobile experience:
- Review all breakpoints and ensure smooth transitions
- Test touch targets (minimum 44px for buttons)
- Optimize font sizes for mobile readability
- Ensure proper spacing and no horizontal scroll
- Test form inputs on mobile devices
- Verify CTA buttons remain prominent and accessible
- Check that timeline graphic scales properly
```

### Step 4.3: Performance Optimization
**Cursor Prompt**:
```
Optimize page performance:
- Minify CSS and remove unused styles
- Optimize SVG graphics for smaller file sizes
- Add proper alt text for all images/graphics
- Implement lazy loading for below-fold content
- Add meta tags for SEO and social sharing
- Ensure fast loading with minimal render blocking
- Test page speed and Core Web Vitals
```

### Step 4.4: Accessibility & SEO
**Cursor Prompt**:
```
Ensure accessibility and SEO best practices:
- Add proper heading hierarchy (h1, h2, h3)
- Include alt text for all visual elements
- Ensure sufficient color contrast (4.5:1 minimum)
- Add focus indicators for keyboard navigation
- Include proper meta descriptions and title tags
- Add semantic markup for better SEO
- Test with screen readers
- Validate HTML and fix any issues
```

## Quality Assurance Checklist

### Visual Consistency
- [ ] All colors match design system specifications
- [ ] Typography scales properly across breakpoints
- [ ] Spacing follows 8px grid system consistently
- [ ] Icons maintain consistent style and sizing

### Functionality
- [ ] All CTAs lead to appropriate actions
- [ ] Navigation works smoothly
- [ ] Mobile experience is polished
- [ ] Forms capture data properly (if implemented)

### Performance
- [ ] Page loads in under 3 seconds
- [ ] Animations are smooth (60fps)
- [ ] No layout shift during loading
- [ ] Works across modern browsers

### Content
- [ ] Headlines are compelling and clear
- [ ] Benefits are specific, not generic
- [ ] Call-to-actions are action-oriented
- [ ] Tone matches brand guidelines

## Cursor Workflow Tips

### Effective Prompting Strategies
1. **Reference established system**: Always mention "using our design system colors/typography"
2. **Be specific about responsive behavior**: Don't assume Cursor will make it mobile-friendly
3. **Request semantic HTML**: Improves accessibility and SEO automatically
4. **Iterate in small chunks**: Perfect one section before moving to the next
5. **Ask for explanations**: "Explain why you chose this approach" helps you learn

### Common Cursor Pitfalls to Avoid
- **Too much in one prompt**: Break complex sections into smaller pieces
- **Forgetting responsive design**: Always specify mobile behavior
- **Not referencing design system**: Leads to inconsistent styling
- **Skipping accessibility**: Add it from the start, not as an afterthought

### Testing Strategy
1. **Desktop first**: Get layout and styling perfect
2. **Mobile second**: Ensure responsive behavior works
3. **Interaction third**: Test all hover states and animations
4. **Performance last**: Optimize after functionality is complete

This implementation strategy balances speed with quality, giving you a professional landing page that converts visitors into users while maintaining the design integrity throughout the build process.